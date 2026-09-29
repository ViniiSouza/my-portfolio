<template>
  <a class="skip-link" href="#main">{{ t.nav.skip }}</a>
  <SiteHeader />
  <main id="main" tabindex="-1">
    <HeroSection />
    <ProjectsSection />
    <StackSection />
    <AboutSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>

<script setup>
import { watchEffect } from 'vue'
import { useI18n } from './i18n/useI18n'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import StackSection from './components/StackSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const { t } = useI18n()

watchEffect(() => {
  document.documentElement.lang = t.value.meta.htmlLang
})
</script>

<style scoped>
.skip-link {
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 100;
  padding: 0.5rem 0.875rem;
  border-radius: var(--radius-control);
  background: var(--ink);
  color: var(--bg);
  font-weight: 500;
  transform: translateY(-200%);
}

.skip-link:focus-visible {
  transform: none;
}

main:focus {
  outline: none;
}
</style>
