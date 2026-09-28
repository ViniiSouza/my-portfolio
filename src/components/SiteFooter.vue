<template>
  <footer class="footer container">
    <p>© {{ year }} Vinícius Gabriel de Souza</p>
    <a class="text-link" :href="contact.links.source" target="_blank" rel="noopener noreferrer">
      {{ t.footer.source }}
      <PhArrowUpRight :size="14" weight="bold" aria-hidden="true" />
    </a>
  </footer>
</template>

<script setup>
import { PhArrowUpRight } from '@phosphor-icons/vue'
import { useI18n } from '../i18n/useI18n'
import { contact } from '../i18n/texts'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  margin-top: var(--section-space);
  padding-block: 2rem calc(2rem + env(safe-area-inset-bottom));
  color: var(--ink-3);
  font-size: 0.875rem;
}

.footer .text-link {
  color: var(--ink-2);
  font-weight: 400;
}
</style>
