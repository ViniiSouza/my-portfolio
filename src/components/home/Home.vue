<template>
  <div id="home-content">
    <Presentation />
    <div id="header-section">
      <h1 id="header-title">{{ texts[language].home.sectionTitle }}</h1>
      <h3 id="header-subtitle">{{ texts[language].home.sectionSubtitle }}</h3>
    </div>
    <div id="intro-section">
      <h3 id="intro-title">{{ texts[language].home.introTitle }}</h3>
      <p id="intro-text">
        {{ texts[language].home.introText }}
        <a style="color: inherit" href="https://www.furb.br/pt/graduacao/ciencia-da-computacao" target="_blank">{{ texts[language].home.introCollege }}</a>.
      </p>
    </div>
  </div>
</template>
<script>
import texts from "../../assets/texts/texts";

export default {
  components: {
    Presentation: () => import('./components/presentation/Presentation.vue')
  },
  data() {
    return {
      texts
    }
  },
  props: {
    language: {
      type: String,
      default: 'pt'
    },
  },
}
</script>
<style>
#home-content {
  font-family: Calibri, sans-serif;
}

#author-name {
  font-size: 13em;
  margin-bottom: 0;
  line-height: 1;
}

#author-subtitle {
  font-family: "Raleway", sans-serif;
  font-style: italic;
  font-size: 3.5rem;
}
#header-section {
  text-align: center;
  color: white;
  background-color: rebeccapurple;
  padding: 20vh 0 20vh 0;
}
#header-title {
  font-family: "Raleway", sans-serif;
  font-size: 7em;
  font-weight: bold;
}
#header-subtitle {
  font-family: "Raleway", sans-serif;
  font-style: italic;
  font-size: 6em;
}

#intro-section {
  background-color: white;
  color: rebeccapurple;
  padding: 10vh 0 10vh 0;
}
#intro-title {
  font-family: "Staatliches", sans-serif;
  font-size: 4em;
  text-align: center;
}
#intro-text {
  font-family: "Montserrat", sans-serif;
  text-align: justify;
  margin: 0 8vw 0 8vw;
  font-size: 1.2rem;
}
@media screen and (max-width: 1500px) {
  #author-name {
    font-size: 11em;
  }
}
@media screen and (max-width: 1024px) {
  #author-name {
    font-size: 4em;
  }
  #author-subtitle {
    font-size: 1.5rem;
  }
  #header-section {
    padding: 10vh 0 10vh 0;
  }
  #header-title {
    font-size: 3em;
  }
  #header-subtitle {
    font-size: 2em;
  }
  #intro-section {
    padding: 7vh 0 7vh 0;
  }
  #intro-title {
    font-size: 2.5em;
  }
  #intro-text {
    font-size: 1.1em;
  }
}
@media screen and (max-width: 480px) {
  #author-name {
    font-size: 3em;
  }
  #author-subtitle {
    font-size: 1.3rem;
    font-weight: bold;
  }
  #header-section {
    padding: 11vh 0 11vh 0;
  }
  #header-title {
    font-size: 2.3em;
  }
  #header-subtitle {
    font-size: 1.5em;
  }
  #intro-section {
    padding: 6vh 0 6vh 0;
  }
  #intro-title {
    font-size: 2em;
  }
  #intro-text {
    font-size: 1em;
  }  
}  
</style>