<template>
  <div id="app">

    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>


          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <Home />
    <Conhecimentos />
    <Projetos />
    <AppInfo />

    <p>Falta seção de projetos</p>
    <p>Organizar navbar</p>
    <p>Colocar no github e tentar deploy</p>
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
