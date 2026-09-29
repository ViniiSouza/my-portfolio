<template>
  <article class="card" v-reveal :aria-labelledby="`card-${project.id}`">
    <figure class="card__code">
      <div class="code card__scroll" tabindex="0" :aria-label="`${t.projects.codeLabel}: ${project.file}`" translate="no" v-html="code"></div>
      <figcaption class="card__file mono" translate="no">{{ project.file }}</figcaption>
    </figure>

    <div class="card__body">
      <p class="kind">{{ project.kind }}</p>
      <h3 :id="`card-${project.id}`" class="card__title" translate="no">{{ project.title }}</h3>
      <p class="card__description">{{ project.description }}</p>
      <ul class="chips" translate="no">
        <li v-for="tech in project.techs" :key="tech" class="chip">{{ tech }}</li>
      </ul>
      <a class="text-link card__repo" :href="project.repo" target="_blank" rel="noopener noreferrer">
        <PhGithubLogo :size="18" aria-hidden="true" />
        {{ t.projects.repoLabel }}
        <PhArrowUpRight :size="14" weight="bold" aria-hidden="true" />
        <span class="visually-hidden">: {{ project.title }}</span>
      </a>
    </div>
  </article>
</template>

<script setup>
import { PhArrowUpRight, PhGithubLogo } from '@phosphor-icons/vue'
import { useI18n } from '../i18n/useI18n'

defineProps({
  project: { type: Object, required: true },
  code: { type: String, required: true },
})

const { t } = useI18n()
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  border: 1px solid var(--line);
  border-radius: var(--radius-surface);
  background: var(--surface);
  overflow: hidden;
  transition: border-color 0.3s var(--ease-out), transform 0.3s var(--ease-out);
}

.card:hover {
  border-color: var(--line-strong);
}

.card__code {
  background: var(--code-bg);
}

.card__scroll {
  height: 17.5rem;
  overflow: auto;
  overscroll-behavior: contain;
}

.card__scroll :deep(pre) {
  overflow: visible;
  width: max-content;
  min-width: 100%;
  font-size: 0.78rem;
}

.card__file {
  padding: 0.5rem 1.375rem;
  border-top: 1px solid var(--code-line);
  color: var(--code-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.875rem;
  padding: 1.5rem 1.5rem 1.75rem;
}

.card__title {
  margin-top: -0.5rem;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
}

.card__description {
  color: var(--ink-2);
  font-size: 0.9688rem;
}

.card__repo {
  margin-top: auto;
  padding-top: 0.375rem;
}
</style>
