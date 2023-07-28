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
        :laptop-imgs="[
          'https://i.imgur.com/i4wvS9j.png',
          'https://i.imgur.com/rNjyK5H.png',
          'https://i.imgur.com/2vUeWo6.png',
        ]"
        :phone-imgs="[
          'https://i.imgur.com/BTJdDRL.png',
          'https://i.imgur.com/kl3LeF7.png',
          'https://i.imgur.com/tiJNTjI.png',
        ]"
        :techs="['C#', 'VueJS']"
        short-desc="A real-time chat application"
        title="ChitChat App"
      />
    </div>
  </div>
</template>
<script>
import './shared/styles.css'

import ProjectCard from './shared/project-card/ProjectCard.vue'
import texts from '../../assets/texts/texts'

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
