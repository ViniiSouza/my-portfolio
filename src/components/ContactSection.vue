<template>
  <section id="contact" class="section container" aria-labelledby="contact-title">
    <div class="contact" v-reveal>
      <h2 id="contact-title" class="section-title">{{ t.contact.title }}</h2>
      <p class="section-lead">{{ t.contact.lead }}</p>

      <div class="contact__email">
        <a class="contact__address" :href="`mailto:${contact.email}`" translate="no">{{ contact.email }}</a>
        <button type="button" class="btn contact__copy" @click="copyEmail">
          <PhCheck v-if="copied" :size="18" weight="bold" aria-hidden="true" />
          <PhCopy v-else :size="18" aria-hidden="true" />
          {{ copied ? t.contact.copied : t.contact.copy }}
        </button>
        <span class="visually-hidden" aria-live="polite">{{ copied ? t.contact.copied : '' }}</span>
      </div>

      <ul class="contact__links">
        <li>
          <a class="btn" :href="contact.links.linkedin" target="_blank" rel="noopener noreferrer">
            <PhLinkedinLogo :size="18" aria-hidden="true" /> LinkedIn
          </a>
        </li>
        <li>
          <a class="btn" :href="contact.links.github" target="_blank" rel="noopener noreferrer">
            <PhGithubLogo :size="18" aria-hidden="true" /> GitHub
          </a>
        </li>
        <li>
          <a class="btn" :href="contact.links.whatsapp" target="_blank" rel="noopener noreferrer">
            <PhWhatsappLogo :size="18" aria-hidden="true" /> WhatsApp
          </a>
        </li>
        <li>
          <a class="btn" :href="t.meta.resumeUrl" target="_blank" rel="noopener noreferrer">
            <PhFileText :size="18" aria-hidden="true" /> {{ t.contact.resume }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue'
import { PhCheck, PhCopy, PhFileText, PhGithubLogo, PhLinkedinLogo, PhWhatsappLogo } from '@phosphor-icons/vue'
import { useI18n } from '../i18n/useI18n'
import { contact } from '../i18n/texts'
import { copyText } from '../composables/clipboard'

const { t } = useI18n()
const copied = ref(false)
let timer

async function copyEmail() {
  if (!(await copyText(contact.email))) return
  copied.value = true
  clearTimeout(timer)
  timer = setTimeout(() => (copied.value = false), 2000)
}

onBeforeUnmount(() => clearTimeout(timer))
</script>

<style scoped>
.contact {
  padding-top: clamp(2.5rem, 5vw, 3.5rem);
  border-top: 1px solid var(--line-strong);
}

.contact__email {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;
  margin-top: clamp(2rem, 4vw, 3rem);
}

.contact__address {
  min-width: 0;
  font-size: clamp(1.5rem, 0.9rem + 3vw, 3.25rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  overflow-wrap: anywhere;
  text-decoration: underline;
  text-decoration-color: var(--accent);
  text-decoration-thickness: 3px;
  text-underline-offset: 0.18em;
  transition: color 0.2s var(--ease-out), text-decoration-color 0.2s var(--ease-out);
}

.contact__address:hover {
  color: var(--accent);
}

.contact__copy {
  min-width: 10.5rem;
  justify-content: center;
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}
</style>
