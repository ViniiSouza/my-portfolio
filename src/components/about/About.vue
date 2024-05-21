<template>
  <section id="about__section">
    <h2 id="about__title">{{ texts[language].about.introTitle }}</h2>
    <p id="about__text">
      {{ texts[language].about.introText }}
      <a
        style="color: inherit"
        href="https://www.furb.br/pt/graduacao/ciencia-da-computacao"
        target="_blank"
        >{{ texts[language].about.introCollege }}</a
      >.
    </p>
  </section>
</template>

<script>
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
}
</script>
