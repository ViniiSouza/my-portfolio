<template>
  <section id="top" class="hero container" aria-labelledby="hero-title">
    <div class="hero__main">
      <h1 id="hero-title" class="hero__title">
        <span class="hero__name" translate="no">{{ t.hero.name }}</span>
        <span class="hero__role">
          {{ t.hero.role }}
          <span class="hero__role-highlight" translate="no">{{ t.hero.roleHighlight }}</span>
        </span>
      </h1>

      <p class="hero__lead">{{ t.hero.lead }}</p>

      <div class="hero__actions">
        <a class="btn btn--primary" href="#projects">
          {{ t.hero.ctaProjects }}
          <PhArrowDown :size="16" weight="bold" aria-hidden="true" />
        </a>
        <a class="btn" :href="t.meta.resumeUrl" target="_blank" rel="noopener noreferrer">
          <PhFileText :size="18" aria-hidden="true" />
          {{ t.hero.ctaResume }}
        </a>
      </div>
    </div>

    <p class="hero__aside">{{ t.hero.aside }}</p>
  </section>
</template>

<script setup>
import { PhArrowDown, PhFileText } from '@phosphor-icons/vue'
import { useI18n } from '../i18n/useI18n'

const { t } = useI18n()
</script>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 8fr) minmax(0, 4fr);
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: end;
  padding-top: clamp(4.5rem, 13vh, 7rem);
}

.hero__title {
  display: grid;
  gap: 0.75rem;
}

.hero__name {
  font-size: clamp(3rem, 1.6rem + 6vw, 6.25rem);
  font-weight: 700;
  line-height: 0.96;
  letter-spacing: -0.035em;
}

.hero__role {
  color: var(--ink-3);
  font-size: clamp(1.625rem, 1.1rem + 2.1vw, 2.5rem);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.015em;
}

.hero__role-highlight {
  color: var(--ink);
  text-decoration: underline;
  text-decoration-color: var(--accent);
  text-decoration-thickness: 0.12em;
  text-underline-offset: 0.2em;
  text-decoration-skip-ink: none;
}

.hero__lead {
  max-width: 36rem;
  margin-top: 1.75rem;
  color: var(--ink-2);
  font-size: clamp(1.125rem, 1rem + 0.45vw, 1.3125rem);
  line-height: 1.55;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.25rem;
}

.hero__aside {
  max-width: 24rem;
  padding-top: 1rem;
  border-top: 2px solid var(--accent);
  color: var(--ink-2);
  font-size: 1rem;
  line-height: 1.55;
}

@media (prefers-reduced-motion: no-preference) {
  .hero__main > *,
  .hero__aside {
    animation: rise 0.9s var(--ease-out) both;
  }

  .hero__main > :nth-child(2) {
    animation-delay: 0.08s;
  }

  .hero__main > :nth-child(3) {
    animation-delay: 0.16s;
  }

  .hero__aside {
    animation-delay: 0.26s;
  }
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
}

@media (max-width: 1023px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
