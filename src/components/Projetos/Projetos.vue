<template>
  <div id="projects-section">
    <div id="projects-header">
      <h3 id="projects-title">Meus Projetos</h3>
      <p id="projects-text">
        Abaixo estão alguns dos projetos que fiz, ao clicar no card, você pode
        visualizar uma prévia do projeto ou acessar o site em que ele está
        hospedado
      </p>
    </div>
    <div id="projects-content">
      <Project-card projectName="MercadoMania" techOne="C Sharp" techTwo="Entity Framework" techThree="Angular" imgSrc="https://i.imgur.com/SSH3szN.png"/>
      <Project-card projectName="To Do List" techOne="JavaScript" />
      <Project-card projectName="Crédito para todxs" techOne="Javascript" techTwo="Bootstrap" imgSrc="" />
    </div>
  </div>
</template>
<script>
import ProjectCard from "./shared/ProjectCard/ProjectCard.vue";
export default {
  components: { ProjectCard },
};
</script>
<style>
#projects-section {
  margin: 7rem 0 7rem 0;
}

#projects-title {
  text-align: center;
  font-family: "Staatliches";
  font-size: 3rem;
}

#projects-text {
  font-family: "Montserrat";
  font-size: 1.2rem;
  text-align: center;
}

#projects-content {
  margin: 0 2rem 0 2rem;
}
</style>