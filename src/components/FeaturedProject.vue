<template>
  <article class="featured" v-reveal aria-labelledby="featured-title">
    <div class="featured__info">
      <p class="kind">{{ project.kind }}</p>
      <h3 id="featured-title" class="featured__title" translate="no">{{ project.title }}</h3>
      <p class="featured__description">{{ project.description }}</p>

      <ul class="featured__points">
        <li v-for="point in project.points" :key="point">{{ point }}</li>
      </ul>

      <ul class="chips" :aria-label="'Stack'" translate="no">
        <li v-for="tech in project.techs" :key="tech" class="chip">{{ tech }}</li>
      </ul>

      <a class="text-link featured__repo" :href="project.repo" target="_blank" rel="noopener noreferrer">
        <PhGithubLogo :size="18" aria-hidden="true" />
        {{ t.projects.repoLabel }}
        <PhArrowUpRight :size="14" weight="bold" aria-hidden="true" />
        <span class="visually-hidden">: {{ project.title }}</span>
      </a>
    </div>

    <div class="featured__panel">
      <div class="tabs" role="tablist" :aria-label="project.title" @keydown="onKeydown">
        <button
          v-for="(tab, index) in tabs"
          :id="`tab-${tab.id}`"
          :key="tab.id"
          ref="tabButtons"
          type="button"
          role="tab"
          class="tabs__tab"
          :aria-selected="active === index"
          :aria-controls="`panel-${tab.id}`"
          :tabindex="active === index ? 0 : -1"
          @click="active = index"
        >
          {{ project.tabs[tab.id] }}
        </button>
      </div>

      <div
        v-for="(tab, index) in tabs"
        v-show="active === index"
        :id="`panel-${tab.id}`"
        :key="tab.id"
        role="tabpanel"
        class="featured__code"
        :aria-labelledby="`tab-${tab.id}`"
      >
        <div :class="['code', 'featured__scroll', `featured__scroll--${tab.id}`]" tabindex="0" :aria-label="project.tabs[tab.id]" translate="no" v-html="tab.html"></div>
        <p class="featured__file mono" translate="no">{{ tab.file }}</p>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, nextTick, ref } from 'vue'
import { PhArrowUpRight, PhGithubLogo } from '@phosphor-icons/vue'
import { useI18n } from '../i18n/useI18n'
import architecture from '../snippets/maritime-architecture.txt?highlight'
import election from '../snippets/maritime-election.go?highlight'
import saga from '../snippets/maritime-saga.go?highlight'

const { t } = useI18n()
const project = computed(() => t.value.projects.featured)

const tabs = [
  { id: 'architecture', html: architecture, file: 'maritime_flow/README.MD' },
  { id: 'election', html: election, file: 'com_tower/pkg/leaderelection/election.go' },
  { id: 'saga', html: saga, file: 'com_tower/pkg/tower/minion/service.go' },
]

const active = ref(0)
const tabButtons = ref([])

// WAI-ARIA tabs pattern: arrows move between tabs, Home/End jump to the ends
async function onKeydown(event) {
  const last = tabs.length - 1
  const moves = {
    ArrowRight: active.value === last ? 0 : active.value + 1,
    ArrowLeft: active.value === 0 ? last : active.value - 1,
    Home: 0,
    End: last,
  }
  if (!(event.key in moves)) return
  event.preventDefault()
  active.value = moves[event.key]
  await nextTick()
  tabButtons.value[active.value]?.focus()
}
</script>

<style scoped>
.featured {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(2rem, 4vw, 4rem);
  align-items: start;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  border: 1px solid var(--line);
  border-radius: var(--radius-surface);
  background: var(--surface);
  box-shadow: var(--shadow-soft);
}

.featured__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
}

.featured__title {
  margin-top: -0.75rem;
  font-size: clamp(2rem, 1.3rem + 2vw, 2.75rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.featured__description {
  color: var(--ink-2);
}

.featured__points {
  display: grid;
  gap: 0.625rem;
  font-size: 0.9688rem;
}

.featured__points li {
  position: relative;
  padding-left: 1.375rem;
}

.featured__points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.8em;
  width: 10px;
  height: 2px;
  background: var(--accent);
}

.featured__repo {
  margin-top: 0.25rem;
}

.featured__panel {
  min-width: 0;
  border: 1px solid var(--code-line);
  border-radius: var(--radius-surface);
  background: var(--code-bg);
  overflow: hidden;
}

.tabs {
  display: flex;
  gap: 0.25rem;
  padding: 0.5rem;
  border-bottom: 1px solid var(--code-line);
  overflow-x: auto;
  scrollbar-width: none;
}

.tabs__tab {
  flex: none;
  min-height: 36px;
  padding: 0 0.875rem;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--code-muted);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s var(--ease-out), color 0.2s var(--ease-out);
}

.tabs__tab:hover {
  color: var(--code-fn);
}

.tabs__tab[aria-selected='true'] {
  background: var(--code-tab);
  color: var(--code-fn);
}

.tabs__tab:focus-visible {
  outline-color: var(--code-keyword);
  outline-offset: -2px;
}

.featured__scroll {
  height: clamp(20rem, 42vw, 29rem);
  overflow: auto;
  overscroll-behavior: contain;
}

.featured__scroll :deep(pre) {
  min-height: 100%;
  overflow: visible;
  width: max-content;
  min-width: 100%;
}

.featured__scroll--architecture :deep(pre) {
  font-size: clamp(0.625rem, 0.45rem + 0.3vw, 0.6875rem);
  line-height: 1.55;
}

.featured__file {
  padding: 0.625rem 1.375rem;
  border-top: 1px solid var(--code-line);
  color: var(--code-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (prefers-reduced-motion: no-preference) {
  .featured__code {
    animation: fade 0.35s var(--ease-out);
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
}

@media (max-width: 1023px) {
  .featured {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 767px) {
  .featured {
    padding: 1.25rem;
  }

  .featured__panel {
    margin-inline: -0.5rem;
  }

  .featured__scroll {
    height: 22rem;
  }

  .tabs__tab {
    padding: 0 0.625rem;
    font-size: 0.8125rem;
  }
}
</style>
