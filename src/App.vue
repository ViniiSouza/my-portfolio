<template>
  <div id="app">
    <Language @languageChanged="changeLanguage"/>
    <Presentation :language="language" />
    <About :language="language" />
    <Projects :language="language" />
    <Knowledge :language="language" />
    <Skills :language="language" />
    <Contact :language="language" />
    <Footer :language="language" />
  </div>
</template>

<script>
import Presentation from './components/presentation/Presentation.vue';
import Knowledge from './components/knowledge/Knowledge.vue';
import Skills from './components/skills/Skills.vue'
import About from './components/about/About.vue'
import Language from './components/language/Language.vue';
import Projects from './components/projects/Projects.vue';
import Contact from './components/contact/Contact.vue';
import Footer from './components/footer/Footer.vue';

export default {
  name: 'App',
  data() {
    return {
      language: localStorage.language
    }
  },
  components: {
    Presentation,
    Knowledge,
    Skills,
    About,
    Language,
    Projects,
    Contact,
    Footer,
  },
  methods: {
    changeLanguage() {
      this.language = localStorage.language
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;1,100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css');
</style>
