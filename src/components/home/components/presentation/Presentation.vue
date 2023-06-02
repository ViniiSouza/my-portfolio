<template>
    <div id="introduction__section">
        <div class="introduction__hello-text">Olá, eu sou o: <span class="introduction__name-text">Vinícius Gabriel de Souza</span></div>
        <div class="introduction__profession-text">FullStack Developer</div>
        <div class="introduction__description-text">Desenvolvedor de software com mais <br> de 2 anos de sólida experiência.</div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>


<style>
#introduction__section {
  font-family: "Staatliches", sans-serif;
  text-align: center;
  padding: 2.5rem 0;
  display: grid;
  grid-template-columns: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
}

.introduction__hello-text {
    /* grid-area: hello; */
    font-size: 3rem;
    font-family: "Raleway", sans-serif;
    text-align: left;
    justify-content: start;
    grid-column-start: 3;
    grid-column-end: 7;
    padding-left: 0.5rem;
  }

.introduction__name-text {
    /* grid-area: name; */
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 3rem;
    background-color: rgb(206, 206, 206);
    max-width: fit-content;
    padding: 0 15px;
}

.introduction__profession-text {
    /* grid-area: title; */
    font-size: 15em;
    line-height: 0.8;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 3;
    grid-column-end: 7;
    text-align: left;
    font-family: "Staatliches", sans-serif;
  }

  .introduction__description-text {
    /* grid-area: description; */
    color: rgb(100, 100, 100);
    font-family: "Montserrat", sans-serif;
    font-size: 1.5em;
    line-height: 1.2;
    grid-row-start: 4;
    grid-column-start: 5;
    grid-column-end: 8;
    line-break: auto;
    overflow-wrap: break-word;
    text-align: left;
  }
</style>