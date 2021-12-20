<template>
  <div>
    <div id="knowledge-section">
      <h3 id="knowledge-title">Conhecimentos</h3>
      <p id="knowledge-text">
        Estou sempre em busca de aprendizado, me aprimorando em tecnologias que
        já conheço e aprendendo novas tecnologias necessárias para o meu dia a
        dia. Minha atuação atual é como fullstack, com ênfase em backend. Abaixo
        estão as tecnologias que mais utilizo e nível de conhecimento de 1 a 10.
      </p>
      <div class="knowledge-language">
        <span
          >C Sharp<img
            class="knowledge-language-logo"
            src="../shared/icons/csharp-icon.png"
        /></span>
        <div class="knowledge-star">
          <filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><star /><star /><star />
        </div>
        <div class="knowledge-language-description">
          <p>
            Conhecimento em classes e objetos, encapsulamento, herança,
            polimorfismo, abstração, interfaces, tratamento de exceções.
            Experiência com Entity Framework, trabalhando code first(ou não),
            com criação de CRUD's, múltiplas tabelas, conexões entre tabelas,
            etc.
          </p>
        </div>
        <hr />
      </div>

      <div class="knowledge-language">
        <span
          >VueJS<img
            class="knowledge-language-logo"
            src="../shared/icons/vuejs-icon.png"
        /></span>
        <div class="knowledge-star">
          <filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><star /><star /><star />
        </div>
        <div class="knowledge-language-description">
          <p>
            Conhecimento em criação e manutenção de componentes, gerenciamento
            de rotas, requisições HTTP, estilizações de componentes,
            propriedades, métodos, etc
          </p>
        </div>
        <hr />
      </div>

      <div class="knowledge-language">
        <span
          >HTML e CSS
          <img
            class="knowledge-language-logo"
            src="../shared/icons/html-icon.png"
          />
          <img
            class="knowledge-language-logo"
            src="../shared/icons/css-icon.png"
          />
        </span>
        <div class="knowledge-star">
          <filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><star /><star /><star />
        </div>
        <div class="knowledge-language-description">
          <p>
            Conhecimento HTML: tags semânticas, criações de formulários,
            acessibilidade Conhecimento CSS: estilizações de elementos,
            animações, pseudo-elementos, seletores avançados, etc
          </p>
        </div>
        <hr />
      </div>

      <div class="knowledge-language">
        <span
          >Bootstrap<img
            class="knowledge-language-logo"
            src="../shared/icons/bootstrap-icon.png"
        /></span>
        <div class="knowledge-star">
          <filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><star /><star /><star />
        </div>
        <div class="knowledge-language-description">
          <p>
            Conhecimento em utilização de elementos bootstrap, estilizações de
            elementos únicos, utilização de classes bootstrap para estilização
            do documento, utilização de bibliotecas conjuntas (vue-bootstrap,
            angular-bootstrap)
          </p>
        </div>
        <hr />
      </div>

      <div class="knowledge-language">
        <span
          >JavaScript<img
            class="knowledge-language-logo"
            src="../shared/icons/javascript-icon.png"
        /></span>
        <div class="knowledge-star">
          <filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><star /><star /><star /><star />
        </div>
        <div class="knowledge-language-description">
          <p>
            Conhecimento em funções, classes, loops, condições, destructuring,
            manipulações de DOM, etc
          </p>
        </div>
        <hr />
      </div>

      <div class="knowledge-language">
        <span
          >SQLServer<img
            class="knowledge-language-logo"
            src="../shared/icons/sql-icon.png"
        /></span>
        <div class="knowledge-star">
          <filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><star /><star /><star /><star />
        </div>
        <div class="knowledge-language-description">
          <p>
            Conhecimento em manipulações de banco de dados, tabelas, colunas e
            dados. Filtros em geral, relacionamento de tabelas, chaves primárias
            e estrangeiras, joins, etc
          </p>
        </div>
        <hr />
      </div>

      <div class="knowledge-language">
        <span
          >TypeScript<img
            class="knowledge-language-logo"
            src="../shared/icons/typescript-icon.png"
        /></span>
        <div class="knowledge-star">
          <filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><star /><star /><star /><star /><star />
        </div>
        <div class="knowledge-language-description">
          <p>
            Conhecimento em usos junto ao Angular com gerenciamento de
            componentes, criações de métodos, etc
          </p>
        </div>
        <hr />
      </div>

      <div class="knowledge-language">
        <span
          >Angular<img
            class="knowledge-language-logo"
            src="../shared/icons/angular-icon.png"
        /></span>
        <div class="knowledge-star">
          <filled-star /><filled-star /><filled-star /><filled-star /><filled-star /><star /><star /><star /><star /><star />
        </div>
        <div class="knowledge-language-description">
          <p>
            Conhecimento em criação e manutenção de componentes, gerenciamento
            de rotas, SPA, requisições HTTP, ngModel, etc
          </p>
        </div>
        <hr />
      </div>

      <div class="knowledge-language">
        <span
          >React<img
            class="knowledge-language-logo"
            src="../shared/icons/react-icon.png"
        /></span>
        <div class="knowledge-star">
          <filled-star /><filled-star /><filled-star /><filled-star /><star /><star /><star /><star /><star /><star />
        </div>
        <div class="knowledge-language-description">
          <p>
            Conhecimento em componentes, props, renderização condicional,
            eventos, hooks, etc (aprendendo atualmente)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FilledStar from "../shared/Star/FilledStar.vue";
import Star from "../shared/Star/Star.vue";
export default {
  data() {
    return {
      cSharp: [{ filled: "star-fill" }],
    };
  },
  components: { Star, FilledStar },
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
.knowledge-language {
  font-family: "Raleway";
  font-size: 2.5rem;
  vertical-align: middle;
  margin-left: 2rem;
  margin-right: 2rem;
}
.knowledge-star {
  display: inline;
  position: absolute;
  left: 28rem;
}
.knowledge-language-description {
  font-family: "Montserrat";
  font-size: 1rem;
  position: relative;
  left: 76rem;
  max-width: 38rem;
  top: -50px;
  margin-bottom: -3rem;
}
.knowledge-language-logo {
  position: relative;
  width: 4rem;
  left: 10px;
}
.star-margin {
  margin: 1.8rem;
  font-size: 1rem;
}
</style>