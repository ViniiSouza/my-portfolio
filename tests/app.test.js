import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

async function mountApp({ search = '', languages = ['pt-BR'] } = {}) {
  vi.resetModules()
  localStorage.clear()
  window.history.replaceState(null, '', `/${search}`)
  vi.spyOn(navigator, 'languages', 'get').mockReturnValue(languages)
  const { default: App } = await import('../src/App.vue')
  const { reveal } = await import('../src/composables/reveal')
  return mount(App, { attachTo: document.body, global: { directives: { reveal } } })
}

describe('App', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('renders the Portuguese page for a Brazilian browser', async () => {
    const wrapper = await mountApp()
    expect(wrapper.get('h1').text()).toContain('Vinícius Souza')
    expect(wrapper.get('#projects-title').text()).toBe('Projetos')
    expect(document.documentElement.lang).toBe('pt-BR')
  })

  it('switches to English and keeps the choice in the URL', async () => {
    const wrapper = await mountApp()
    const english = wrapper.findAll('.lang__option').find((b) => b.text().includes('EN'))
    await english.trigger('click')
    expect(wrapper.get('#projects-title').text()).toBe('Projects')
    expect(english.attributes('aria-pressed')).toBe('true')
    expect(window.location.search).toBe('?language=en')
    expect(localStorage.getItem('language')).toBe('en')
  })

  it('honours ?language=en links', async () => {
    const wrapper = await mountApp({ search: '?language=en' })
    expect(wrapper.get('#about-title').text()).toBe('About')
  })

  it('renders highlighted code from the real snippets', async () => {
    const wrapper = await mountApp()
    const panels = wrapper.findAll('.code pre')
    expect(panels.length).toBeGreaterThanOrEqual(5)
    expect(wrapper.html()).toContain('SearchFacesByImageAsync')
    expect(wrapper.html()).toContain('StartElection')
  })

  it('moves between featured tabs with the arrow keys', async () => {
    const wrapper = await mountApp()
    const tabs = () => wrapper.findAll('[role="tab"]')
    expect(tabs()[0].attributes('aria-selected')).toBe('true')

    await wrapper.get('[role="tablist"]').trigger('keydown', { key: 'ArrowRight' })
    await nextTick()
    expect(tabs()[1].attributes('aria-selected')).toBe('true')
    expect(document.activeElement).toBe(tabs()[1].element)

    await wrapper.get('[role="tablist"]').trigger('keydown', { key: 'ArrowLeft' })
    await wrapper.get('[role="tablist"]').trigger('keydown', { key: 'ArrowLeft' })
    await nextTick()
    expect(tabs()[2].attributes('aria-selected')).toBe('true')
  })
})
