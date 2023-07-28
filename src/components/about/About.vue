<template>
  <div id="home-content">
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
  </div>
</template>

<script>
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
<style>
#home-content {
  font-family: Calibri, sans-serif;
}
#intro-section {
  background-color: var(--primary);
  color: var(--white);
  padding: 10vh 0 10vh 0;
}
#intro-title {
  font-family: var(--title-font);
  font-size: 4em;
  text-align: center;
}
#intro-text {
  font-family: 'Montserrat', sans-serif;
  text-align: justify;
  margin: 0 8vw 0 8vw;
  font-size: 1.2rem;
}
</style>