<template>
  <section id="introduction__section">
    <div class="introduction__wrapper">
      <div class="introduction__hello-text">
        {{ texts[language].presentation.introduction }}
        <div class="introduction__name-container">
          <span class="introduction__name-text">Vinícius Souza</span>
        </div>
      </div>
      <h1 class="introduction__profession-text">
        {{ texts[language].presentation.title1 }}
        <br />
        {{ texts[language].presentation.title2 }}
      </h1>
    </div>
    <div class="introduction__description-text">
      {{ texts[language].presentation.description1 }} <br />
      {{ texts[language].presentation.description2 }}
    </div>
    <div class="introduction__cta">
      <a
        class="introduction__cta-button introduction__cta-button--primary"
        href="#projects__section"
      >
        {{ texts[language].presentation.ctaProjects }}
      </a>
      <a
        class="introduction__cta-button"
        :href="cvLink"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bi bi-file-earmark-text"></i>
        {{ texts[language].presentation.ctaResume }}
      </a>
      <a
        class="introduction__cta-button"
        href="https://www.linkedin.com/in/vinicius-gabriel-de-souza/"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bi bi-linkedin"></i> LinkedIn
      </a>
    </div>
  </section>
</template>
<script>
// component style
import './shared/styles.css'
import texts from '../../assets/texts/texts.json'

export default {
  data() {
    return {
      texts,
    }
  },
  props: {
    language: {
      type: String,
      default: 'pt',
    },
  },
  computed: {
    cvLink() {
      return this.language == 'pt'
        ? 'https://drive.google.com/file/d/17qtNu3I_ipZLUlbefznrRozJGI4a2Nwv/view?usp=sharing'
        : 'https://drive.google.com/file/d/1XOa4Or4heizqa4aWNHwvkqRCGL4BTOwj/view?usp=sharing'
    },
  },
}
</script>
