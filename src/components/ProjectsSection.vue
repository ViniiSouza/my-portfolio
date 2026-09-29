<template>
  <section id="projects" class="section container" aria-labelledby="projects-title">
    <header v-reveal>
      <h2 id="projects-title" class="section-title">{{ t.projects.title }}</h2>
      <p class="section-lead">{{ t.projects.lead }}</p>
    </header>

    <FeaturedProject class="projects__featured" />

    <div class="projects__cards">
      <ProjectCard
        v-for="project in t.projects.cards"
        :key="project.id"
        :project="project"
        :code="snippets[project.id]"
      />
    </div>

    <div class="others" v-reveal>
      <h3 class="others__title">{{ t.projects.othersTitle }}</h3>
      <ul class="others__list">
        <li v-for="project in t.projects.others" :key="project.title" class="others__item">
          <h4 class="others__name" translate="no">{{ project.title }}</h4>
          <p class="others__description">{{ project.description }}</p>
          <p class="others__techs" translate="no">{{ project.techs.join(', ') }}</p>
          <a class="text-link" :href="project.repo" target="_blank" rel="noopener noreferrer">
            {{ t.projects.repoLabel }}
            <PhArrowUpRight :size="14" weight="bold" aria-hidden="true" />
            <span class="visually-hidden">: {{ project.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { PhArrowUpRight } from '@phosphor-icons/vue'
import { useI18n } from '../i18n/useI18n'
import FeaturedProject from './FeaturedProject.vue'
import ProjectCard from './ProjectCard.vue'
import faceCode from '../snippets/face-recognition.cs?highlight'
import chitchatCode from '../snippets/chitchat-hub.cs?highlight'

const { t } = useI18n()
const snippets = { face: faceCode, chitchat: chitchatCode }
</script>

<style scoped>
.projects__featured {
  margin-top: clamp(2.5rem, 5vw, 4rem);
}

.projects__cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.others {
  margin-top: clamp(4rem, 8vw, 6rem);
}

.others__title {
  font-size: 1.375rem;
  letter-spacing: -0.02em;
}

.others__list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.5rem;
  margin-top: 1.5rem;
}

.others__item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  padding-top: 1.25rem;
  border-top: 2px solid var(--ink);
}

.others__name {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.015em;
}

.others__description {
  color: var(--ink-2);
  font-size: 0.9688rem;
}

.others__techs {
  margin-top: auto;
  color: var(--ink-3);
  font-size: 0.875rem;
  font-weight: 500;
}

@media (max-width: 1023px) {
  .projects__cards {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 767px) {
  .others__list {
    grid-template-columns: minmax(0, 1fr);
    gap: 2rem;
  }
}
</style>
