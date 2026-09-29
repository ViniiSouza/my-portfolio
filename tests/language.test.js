import { describe, expect, it } from 'vitest'
import { resolveLanguage } from '../src/i18n/language'

describe('resolveLanguage', () => {
  it('prefers an explicit ?language= query, case-insensitive', () => {
    expect(resolveLanguage({ query: 'EN', stored: 'pt', browserLanguages: ['pt-BR'] })).toBe('en')
  })

  it('ignores unsupported query values and falls back to the stored choice', () => {
    expect(resolveLanguage({ query: 'es', stored: 'pt', browserLanguages: ['en-US'] })).toBe('pt')
  })

  it('uses the first supported browser language when nothing is stored', () => {
    expect(resolveLanguage({ browserLanguages: ['sv-SE', 'pt-BR', 'en'] })).toBe('pt')
    expect(resolveLanguage({ browserLanguages: ['en-GB'] })).toBe('en')
  })

  it('falls back to English for visitors in any other language', () => {
    expect(resolveLanguage({ browserLanguages: ['de-DE'] })).toBe('en')
    expect(resolveLanguage()).toBe('en')
  })
})
