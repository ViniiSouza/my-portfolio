import { fileURLToPath, URL } from 'node:url'
import { readFile } from 'node:fs/promises'
import { extname } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHighlighter } from 'shiki'

// Code snippets are highlighted at build time, so the page ships plain HTML
// and no highlighter runtime. Colors come from CSS variables (see main.css),
// which keeps snippets in sync with the light and dark themes.
const codeTheme = {
  name: 'portfolio',
  type: 'light',
  bg: 'var(--code-bg)',
  fg: 'var(--code-fg)',
  settings: [
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: 'var(--code-comment)', fontStyle: 'italic' } },
    { scope: ['keyword', 'storage', 'storage.type', 'storage.modifier', 'keyword.control', 'keyword.operator.new'], settings: { foreground: 'var(--code-keyword)' } },
    { scope: ['string', 'string.quoted', 'punctuation.definition.string'], settings: { foreground: 'var(--code-string)' } },
    { scope: ['entity.name.function', 'support.function', 'meta.function-call'], settings: { foreground: 'var(--code-fn)' } },
    { scope: ['entity.name.type', 'support.class', 'support.type', 'entity.name.class'], settings: { foreground: 'var(--code-type)' } },
    { scope: ['constant.numeric', 'constant.language'], settings: { foreground: 'var(--code-const)' } },
  ],
}

const langByExtension = { '.go': 'go', '.cs': 'csharp', '.py': 'python', '.txt': 'text' }

function snippetHighlight() {
  let highlighter
  return {
    name: 'snippet-highlight',
    enforce: 'pre',
    async load(id) {
      if (!id.endsWith('?highlight')) return null
      const file = id.slice(0, -'?highlight'.length)
      this.addWatchFile(file)
      const code = (await readFile(file, 'utf8')).replace(/\s+$/, '')
      highlighter ??= await createHighlighter({ themes: [codeTheme], langs: ['go', 'csharp', 'python'] })
      const html = highlighter.codeToHtml(code, {
        lang: langByExtension[extname(file)] ?? 'text',
        theme: 'portfolio',
      })
      return `export default ${JSON.stringify(html)}`
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [snippetHighlight(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
  },
})
