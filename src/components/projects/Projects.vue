<template>
  <div id="projects__section">
    <div id="projects-header">
      <h3 id="projects-title">{{ texts[language].projects.title }}</h3>
      <p class="projects-text">
        {{ texts[language].projects.description }}
      </p>
    </div>
    <div class="projects__wrapper">
      <ProjectCard
        v-for="project in texts[language].projects.items"
        :key="project.title"
        :laptop-imgs="project.imgs.laptop"
        :phone-imgs="project.imgs.cellphone"
        :techs="project.techs"
        :short-desc="project.description"
        :title="project.title"
      />
    </div>
  </div>
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
