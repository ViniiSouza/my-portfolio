<template>
  <section id="about" class="section container" aria-labelledby="about-title">
    <div class="about">
      <div class="about__main" v-reveal>
        <h2 id="about-title" class="section-title">{{ t.about.title }}</h2>
        <div class="about__text">
          <p v-for="paragraph in t.about.paragraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
      </div>

      <aside class="about__education" v-reveal aria-labelledby="education-title">
        <h3 id="education-title" class="about__education-title">{{ t.about.educationTitle }}</h3>
        <ul>
          <li v-for="item in t.about.education" :key="item.title" class="about__education-item">
            <p class="about__education-name">{{ item.title }}</p>
            <p class="about__education-meta">{{ item.meta }}</p>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../i18n/useI18n'

const { t } = useI18n()
</script>

<style scoped>
.about {
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 4fr);
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: end;
}

.about__text {
  display: grid;
  gap: 1.125rem;
  max-width: 62ch;
  margin-top: 1.75rem;
  color: var(--ink-2);
  font-size: 1.0938rem;
}

.about__text p:first-child {
  color: var(--ink);
}

.about__education-title {
  padding-bottom: 0.875rem;
  font-size: 1rem;
  font-weight: 600;
}

.about__education-item {
  padding-block: 1rem;
  border-top: 1px solid var(--line-strong);
}

.about__education-name {
  font-weight: 500;
  letter-spacing: -0.01em;
}

.about__education-meta {
  color: var(--ink-3);
  font-size: 0.9375rem;
}

@media (max-width: 1023px) {
  .about {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
