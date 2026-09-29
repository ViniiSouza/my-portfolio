<template>
  <header class="header">
    <div class="container header__inner">
      <a class="header__brand" href="#top" translate="no">Vinícius Souza</a>

      <nav class="header__nav" :aria-label="t.nav.label">
        <a href="#projects">{{ t.nav.projects }}</a>
        <a href="#stack">{{ t.nav.stack }}</a>
        <a href="#about">{{ t.nav.about }}</a>
        <a href="#contact">{{ t.nav.contact }}</a>
      </nav>

      <div class="lang" role="group" :aria-label="t.nav.language">
        <button
          v-for="code in LANGUAGES"
          :key="code"
          type="button"
          class="lang__option"
          :aria-pressed="language === code"
          :lang="code === 'pt' ? 'pt-BR' : 'en'"
          @click="setLanguage(code)"
        >
          <span aria-hidden="true">{{ code.toUpperCase() }}</span>
          <span class="visually-hidden">{{ code === 'pt' ? 'Português' : 'English' }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from '../i18n/useI18n'
import { LANGUAGES } from '../i18n/language'

const { t, language, setLanguage } = useI18n()
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--header-h);
  border-bottom: 1px solid color-mix(in srgb, var(--line) 70%, transparent);
  background: color-mix(in srgb, var(--bg) 92%, transparent);
  backdrop-filter: saturate(160%) blur(14px);
  -webkit-backdrop-filter: saturate(160%) blur(14px);
}

.header__inner {
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 100%;
}

.header__brand {
  font-size: 1.0625rem;
  font-weight: 700;
  letter-spacing: -0.015em;
}

.header__nav {
  display: flex;
  gap: 1.75rem;
  margin-left: auto;
  font-size: 0.9375rem;
  color: var(--ink-2);
}

.header__nav a {
  position: relative;
  padding-block: 0.25rem;
  transition: color 0.2s var(--ease-out);
}

.header__nav a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s var(--ease-out);
}

.header__nav a:hover {
  color: var(--ink);
}

.header__nav a:hover::after {
  transform: scaleX(1);
}

.lang {
  display: inline-flex;
  padding: 3px;
  border: 1px solid var(--line);
  border-radius: var(--radius-control);
  background: var(--surface);
}

.lang__option {
  min-width: 40px;
  min-height: 32px;
  padding: 0 0.5rem;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--ink-3);
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s var(--ease-out), color 0.2s var(--ease-out);
}

.lang__option:hover {
  color: var(--ink);
}

.lang__option[aria-pressed='true'] {
  background: var(--ink);
  color: var(--bg);
}

@media (max-width: 767px) {
  .header__nav {
    display: none;
  }

  .lang {
    margin-left: auto;
  }
}
</style>
