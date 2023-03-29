<template>
  <div id="projects-section">
    <div id="projects-header">
      <h3 id="projects-title">{{ texts[language].projects.title }}</h3>
      <p id="projects-text">
        {{ texts[language].projects.description }}
      </p>
    </div>
    <div id="projects-content">
      <Project-card
        techOne=".NET 6.0"
        techTwo="SignalR"
        techThree="VueJS 3"
        imgSrc="https://i.imgur.com/LDKasiH.png"
        videoSrc="https://www.youtube.com/embed/fGrdTVUfvjw"
        gitSrc="https://github.com/ViniiSouza/chat-instantaneo"
        :language="language"
        :projectName="texts[language].projects.chat.name"
        :projectDescription="texts[language].projects.chat.description"
        :usedConcepts="texts[language].projects.chat.concepts"
      />
      <Project-card
        techOne="C Sharp"
        techTwo="Entity Framework"
        techThree="Angular"
        imgSrc="https://i.imgur.com/SSH3szN.png"
        videoSrc="https://www.youtube.com/embed/D6srf-43vGY"
        gitSrc="https://github.com/ViniiSouza/controle_estoque_mercado"
        :language="language"
        :projectName="texts[language].projects.mercadoMania.name"
        :projectDescription="texts[language].projects.mercadoMania.description"
        :usedConcepts="texts[language].projects.mercadoMania.concepts"
      />
      <Project-card
        techOne="JavaScript"
        imgSrc="https://i.imgur.com/FcB84MT.jpg"
        videoSrc=""
        projectSrc="https://viniisouza.github.io/To-Do_List/"
        gitSrc="https://github.com/ViniiSouza/To-Do_List"
        :language="language"
        :projectName="texts[language].projects.toDoList.name"
        :projectDescription="texts[language].projects.toDoList.description"
        :usedConcepts="texts[language].projects.toDoList.concepts"
      />
      <Project-card
        techOne="Javascript"
        techTwo="Bootstrap"
        videoSrc=""
        projectSrc="https://viniisouza.github.io/analise_emprestimo/index.html"
        imgSrc="https://i.imgur.com/pk8xkKH.png"
        gitSrc="https://github.com/ViniiSouza/analise_emprestimo"
        :language="language"
        :projectName="texts[language].projects.credit.name"
        :projectDescription="texts[language].projects.credit.description"
        :usedConcepts="texts[language].projects.credit.concepts"
      />
      <Project-card
        techOne="React"
        techTwo="JavaScript"
        imgSrc="https://i.imgur.com/mcQVr9U.png"
        videoSrc="https://www.youtube.com/embed/zUj2zDuplOI"
        gitSrc="https://github.com/ViniiSouza/DevInMMO"
        :language="language"
        :projectName="texts[language].projects.mmo.name"
        :projectDescription="texts[language].projects.mmo.description"
        :usedConcepts="texts[language].projects.mmo.concepts"
      />
      <!-- Incluir jogo da velha -->

    </div>
  </div>
</template>
<script>
import ProjectCard from "./shared/projetos-card/ProjetosCard.vue";
import texts from "../../assets/texts/texts";

export default {
  data() {
    return {
      texts,
    }
  },
  components: { ProjectCard },
  props: {
    language: {
      type: String,
      default: 'pt'
    },
  },
}
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
  width: 100%;
  margin: auto;
  text-align: center;
}

@media screen and (max-width: 1024px) {
  #projects-section {
    margin: 4rem 2.5rem 4rem 2.5rem;
  }

  #projects-title {
    font-size: 2.3rem;
  }

  #projects-text {
    font-size: 1.2rem;
  }

  #projects-content {
    margin: 1rem 0 1rem 0;
  }
}

@media screen and (max-width: 480px) {
  #projects-title {
    font-size: 2.2rem;
  }
  #projects-text {
    font-size: 1rem;
  }
}
</style>