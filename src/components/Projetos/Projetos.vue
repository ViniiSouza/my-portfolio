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
      <Project-card
        projectName="MercadoMania"
        techOne="C Sharp"
        techTwo="Entity Framework"
        techThree="Angular"
        imgSrc="https://i.imgur.com/SSH3szN.png"
        projectDescription="Sistema de controle de estoque de um mercado. É possível adicionar produtos, categorias e alterar estoque. Os produtos podem ser vinculados às categorias. Projeto feito com Angular, e C Sharp (Entity Framework)"
        videoSrc="https://www.youtube.com/embed/D6srf-43vGY"
        gitSrc="https://github.com/ViniiSouza/controle_estoque_mercado"
        usedConcepts="Uso do Entity Framework para conexões com o banco e parte de API com requisições REST para relacionamento com o frontend. FrontEnd feito com Angular e biblioteca Bootstrap."
      />
      <Project-card
        projectName="To Do List"
        techOne="JavaScript"
        imgSrc="https://i.imgur.com/FcB84MT.jpg"
        projectDescription="Projeto do curso DevInHouse, To-do list. Sistema para incluir e remover atividades, marcá-las como concluídas, etc."
        videoSrc=""
        projectSrc="https://viniisouza.github.io/To-Do_List/"
        gitSrc="https://github.com/ViniiSouza/To-Do_List"
        usedConcepts="Uso do localStorage para armazenar tarefas mesmo após fechar/recarregar a guia."
      />
      <Project-card
        projectName="Crédito para todxs"
        techOne="Javascript"
        techTwo="Bootstrap"
        projectDescription="Sistema de análise de perfil para disponibilização de crédito. Conforme pontuação do usuário, é gerada uma taxa de aprovação do empréstimo solicitado. Usuário tem a opção de fornecer uma garantia de pagamento, aumentando a chance de aprovação do empréstimo."
        videoSrc=""
        projectSrc="https://viniisouza.github.io/analise_emprestimo/index.html"
        imgSrc="https://i.imgur.com/pk8xkKH.png"
        gitSrc="https://github.com/ViniiSouza/analise_emprestimo"
        usedConcepts="Lógica feita com javascript e frontend feito com HTML + Boostrap"
      />
      <Project-card
        projectName="DevInMMO"
        techOne="React"
        techTwo="JavaScript"
        imgSrc="https://i.imgur.com/mcQVr9U.png"
        projectDescription="Projeto do curso DevInHouse, site de informações de jogos e notícias sobre jogos. Criado utilizando React e recebendo informações de uma API com os jogos e notícias. Sistema de busca por palavras e paginação. Sistema de comentários armazenados em localStorage."
        videoSrc="https://www.youtube.com/embed/zUj2zDuplOI"
        gitSrc="https://github.com/ViniiSouza/DevInMMO"
        usedConcepts="revisado o uso das requisições REST, fazendo requisições de uma API externa para uso no projeto. Armazenamento de comentários em localStorage. Criação de 3 temas diferentes para o site."
      />
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