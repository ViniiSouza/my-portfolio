<template>
    <div id="intro-section">
      <h3 id="intro-title">{{ texts[language].home.introTitle }}</h3>
      <p id="intro-text">
        {{ texts[language].home.introText }}
        <a
          style="color: inherit"
          href="https://www.furb.br/pt/graduacao/ciencia-da-computacao"
          target="_blank"
          >{{ texts[language].home.introCollege }}</a
        >.
      </p>
    </div>
</template>

<script>
import './shared/styles.css'
import texts from '../../assets/texts/texts'

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
