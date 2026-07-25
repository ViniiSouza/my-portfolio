<template>
  <section id="projects__section">
    <div id="projects-header">
      <h2 id="projects-title">{{ texts[language].projects.title }}</h2>
      <p class="projects-text">
        {{ texts[language].projects.description }}
      </p>
    </div>
    <div class="projects__wrapper">
      <ProjectCard
        v-for="project in texts[language].projects.items"
        :key="project.title"
        :laptop-imgs="project.imgs ? project.imgs.laptop : null"
        :phone-imgs="project.imgs ? project.imgs.cellphone : null"
        :techs="project.techs"
        :short-desc="project.description"
        :title="project.title"
        :repo-url="project.repo"
        :icon="project.icon"
      />
    </div>
  </section>
</template>
<script>
import './shared/styles.css'

import ProjectCard from './shared/project-card/ProjectCard.vue'
import texts from '../../assets/texts/texts.json'

export default {
  data() {
    return {
      texts,
    }
  },
  components: { ProjectCard },
  props: {
    language: {
      type: String,
      default: 'pt',
    },
  },
}
</script>
