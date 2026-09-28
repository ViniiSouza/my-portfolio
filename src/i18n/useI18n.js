import { computed, ref } from 'vue'
import { texts } from './texts'
import { LANGUAGES, resolveLanguage } from './language'

const STORAGE_KEY = 'language'

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function initialLanguage() {
  if (typeof window === 'undefined') return 'pt'
  return resolveLanguage({
    query: new URLSearchParams(window.location.search).get('language'),
    stored: readStored(),
    browserLanguages: navigator.languages ?? [navigator.language],
  })
}

const language = ref(initialLanguage())
const t = computed(() => texts[language.value])

function setLanguage(next) {
  if (!LANGUAGES.includes(next)) return
  language.value = next
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // storage blocked (private mode): the choice still applies to this visit
  }
  const url = new URL(window.location.href)
  url.searchParams.set('language', next)
  history.replaceState(null, '', url)
}

export function useI18n() {
  return { language, t, setLanguage }
}
