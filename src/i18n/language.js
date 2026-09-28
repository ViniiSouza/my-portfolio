export const LANGUAGES = ['pt', 'en']

// Priority: explicit ?language= link, then the visitor's last choice, then the
// browser languages. Anything that is not Portuguese falls back to English.
export function resolveLanguage({ query, stored, browserLanguages = [] } = {}) {
  const fromQuery = query?.toLowerCase()
  if (LANGUAGES.includes(fromQuery)) return fromQuery
  if (LANGUAGES.includes(stored)) return stored

  for (const tag of browserLanguages) {
    const base = tag.toLowerCase().split('-')[0]
    if (LANGUAGES.includes(base)) return base
  }
  return 'en'
}
