<template>
  <div id="app">
    <Language @languageChanged="changeLanguage"/>
    <Home :language="language" />
    <Knowledge :language="language" />
    <Projects :language="language" />
    <AppInfo :language="language" />
    <Footer :language="language" />
  </div>
</template>

<script>
import Knowledge from './components/knowledge/Knowledge.vue';
import Home from './components/home/Home.vue';
import Language from './components/language/Language.vue';
import Projects from './components/projects/Projects.vue';
import AppInfo from './components/app-info/AppInfo.vue';
import Footer from './components/footer/Footer.vue';

export default {
  name: 'App',
  data() {
    return {
      language: localStorage.language
    }
  },
  components: {
    Home,
    Language,
    Knowledge,
    Projects,
    AppInfo,
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
