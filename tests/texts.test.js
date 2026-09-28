import { describe, expect, it } from 'vitest'
import { texts } from '../src/i18n/texts'

function shape(value) {
  if (Array.isArray(value)) return value.map(shape)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, shape(value[key])]))
  }
  return typeof value
}

function strings(value) {
  if (typeof value === 'string') return [value]
  if (value && typeof value === 'object') return Object.values(value).flatMap(strings)
  return []
}

describe('texts', () => {
  it('keeps Portuguese and English with the same structure', () => {
    expect(shape(texts.en)).toEqual(shape(texts.pt))
  })

  it('has no empty strings', () => {
    for (const lang of Object.keys(texts)) {
      expect(strings(texts[lang]).filter((s) => !s.trim())).toEqual([])
    }
  })

  it('never uses em or en dashes in public copy', () => {
    const offenders = Object.values(texts).flatMap(strings).filter((s) => /[–—]/.test(s))
    expect(offenders).toEqual([])
  })
})
