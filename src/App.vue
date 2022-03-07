<template>
  <div id="app">
    <Home />
    <Conhecimentos />
    <Projetos />
    <AppInfo />
  </div>
</template>

<script>
import Conhecimentos from './components/Conhecimentos/Conhecimentos.vue';
import Home from './components/Home/Home.vue';
import Projetos from './components/Projetos/Projetos.vue';
import AppInfo from './components/AppInfo/AppInfo.vue';

export default {
  name: "App",
  components: {
    Home,
    Conhecimentos,
    Projetos,
    AppInfo
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;1,100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap');

</style>
