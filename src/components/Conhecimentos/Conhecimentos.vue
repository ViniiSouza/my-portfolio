<template>
  <div>
    <div id="knowledge-section">
      <h3 id="knowledge-title">Conhecimentos</h3>
      <p id="knowledge-text">
        Estou sempre em busca de aprendizado, me aprimorando em tecnologias que
        já conheço e aprendendo novas tecnologias necessárias para o meu dia a
        dia. Minha atuação atual é como fullstack, com ênfase em backend. Abaixo
        estão as tecnologias que mais utilizo.
      </p>

      <Stack
        imgSrc="https://i.imgur.com/FXkCnmH.png"
        stackTitle="C Sharp"
        stackDescription="Conhecimento em classes, POO (objetos, encapsulamento, herança,
        polimorfismo, abstração, etc), interfaces, tratamento de exceções. Uso do Entity Framework
        trabalhando code first(ou não), com criação e manutenção de CRUD's, tabelas, vínculo entre tabelas 1:1, N:1, N:N, etc."
      />

      <Stack
        imgSrc="https://i.imgur.com/VOQvATc.png"
        stackTitle="VueJS"
        stackDescription="Criação e manutenção de componentes, gerenciamento
            de rotas, requisições HTTP, estilizações de componentes,
            propriedades, métodos, diretivas, vuex, etc"
      />

      <Stack
        imgSrc="https://i.imgur.com/pSYaNdY.png"
        stackTitle="JavaScript"
        stackDescription="Funções, classes, loops, condições, destructuring,
            manipulações de DOM, etc"
      />

      <Stack
        imgSrc="https://i.imgur.com/esMeynM.png"
        stackTitle="SQLServer"
        stackDescription="Manipulações de banco de dados, tabelas, colunas e
            dados. Filtros em geral, relacionamento de tabelas, chaves primárias
            e estrangeiras, joins, etc"
      />

      <Stack
        imgSrc="https://i.imgur.com/iUV9fDa.png"
        stackTitle="React"
        stackDescription="Conhecimento em componentes, props, renderização condicional,
            eventos, hooks, contextAPI, react-router-dom, formulários com formik, yup, etc"
      />

      <Stack
        imgSrc="https://i.imgur.com/QcoruCz.png"
        stackTitle="Bootstrap"
        stackDescription="Utilização de elementos bootstrap, estilizações de
            elementos únicos, utilização de classes bootstrap para estilização
            do documento, utilização de bibliotecas conjuntas (vue-bootstrap,
            angular-bootstrap), etc"
      />

      <Stack
        imgSrc="https://i.imgur.com/UKCDmJf.png"
        stackTitle="HTML"
        stackDescription="Estruturas com tags semânticas, criações de formulários,
            acessibilidade, etc"
      />

      <Stack
        imgSrc="https://i.imgur.com/QyM1XAK.png"
        stackTitle="CSS"
        stackDescription="Estilizações de elementos,
            animações, pseudo-elementos, seletores avançados, media queries, etc"
      />

      <Stack
        imgSrc="https://i.imgur.com/t4grEz4.png"
        stackTitle="TypeScript"
        stackDescription="Usos junto ao Angular com gerenciamento de
            componentes, criações de métodos, etc"
      />

      <Stack
        imgSrc="https://i.imgur.com/nxWWeEy.png"
        stackTitle="Angular"
        stackDescription="Conhecimento em criação e manutenção de componentes, gerenciamento
            de rotas, SPA, requisições HTTP, ngModel, etc"
      />
    </div>
  </div>
</template>
<script>
import Stack from "./Stack/Stack.vue";
export default {
  data() {},
  components: { Stack },
};
</script>
<style>
#knowledge-section {
  background-color: rebeccapurple;
  color: white;
  padding: 10rem 0 10rem 0;
}
#knowledge-title {
  font-family: "Staatliches", sans-serif;
  font-size: 3rem;
  text-align: center;
}
#knowledge-text {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem 8rem 2rem 8rem;
}

.knowledge-container {
  font-family: "Raleway";
  font-size: 2.5rem;
  vertical-align: middle;
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: row;
}
@media screen and (max-width: 1500px) {
}
@media screen and (max-width: 1024px) {
  #knowledge-section {
    padding: 5rem 0 5rem 0;
  }
  #knowledge-title {
    font-size: 2.2rem;
  }
  #knowledge-text {
    font-size: 1.2rem;
    margin: 1rem 2.5rem 2rem 2.5rem;
  }
}
@media screen and (max-width: 480px) {
  #knowledge-section {
    padding: 3rem 0 3rem 0;
  }
  #knowledge-title {
    font-size: 2.2rem;
  }
  #knowledge-text {
    font-size: 1rem;
    margin: 1rem 1.1rem 2rem 1.1rem;
  }
}
</style>