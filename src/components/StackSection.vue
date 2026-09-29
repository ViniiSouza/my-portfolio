<template>
  <section id="stack" class="section container" aria-labelledby="stack-title">
    <h2 id="stack-title" class="section-title" v-reveal>{{ t.stack.title }}</h2>

    <div class="stack" v-reveal>
      <div v-for="(group, index) in t.stack.groups" :key="group.title" class="stack__group" :class="`stack__group--${index}`">
        <h3 class="stack__heading">{{ group.title }}</h3>
        <ul class="stack__items" translate="no">
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../i18n/useI18n'

const { t } = useI18n()
</script>

<style scoped>
.stack {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(2rem, 5vw, 4rem);
  margin-top: clamp(2rem, 4vw, 3rem);
}

.stack__heading {
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--ink);
  font-size: 1rem;
  font-weight: 600;
}

.stack__group--1 .stack__heading,
.stack__group--2 .stack__heading {
  border-bottom-color: var(--line-strong);
}

.stack__items {
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.25rem;
  row-gap: 0.25rem;
  margin-top: 1.125rem;
  font-size: clamp(1.25rem, 1rem + 0.9vw, 1.625rem);
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1.45;
}

.stack__group--0 .stack__items {
  color: var(--ink);
}

.stack__group--1 .stack__items {
  color: var(--ink-2);
}

.stack__group--2 .stack__items {
  color: var(--ink-3);
}

@media (max-width: 1023px) {
  .stack {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
