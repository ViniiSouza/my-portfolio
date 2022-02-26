<template>
<div>
  <hr />
  <div class="stack-container">
    <div class="stack-language">
      <span
        >{{ stackTitle }}<img
          class="stack-language-logo"
          :src="imgSrc"
      /></span>
    </div>
    <div class="stack-language-description">
      <p>{{ stackDescription }}</p>
    </div>
  </div>
    </div>
</template>
<script>
export default {
    props: {
        imgSrc: {
            default: "vazio",
            type: String
        },
        stackTitle: {
            default: "vazio",
            type: String
        },
        stackDescription: {
            default: "vazio",
            type: String
        }
    }
};
</script>
<style>
.stack-container {
  font-family: "Raleway";
  font-size: 2.5rem;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: 0.5s;
}
.stack-container:hover {
  background-color: rgb(115, 36, 189);
  transition: 0.5s;
}
.stack-language {
  margin: 0 auto;
}
.stack-language-description {
  font-family: "Montserrat";
  font-size: 1rem;
  max-width: 38rem;
  margin: 0 auto;
}
.stack-language-logo {
  position: relative;
  width: 4rem;
  left: 10px;
}
@media screen and (max-width: 1024px) {
  .stack-container:hover {
  background-color: transparent;
}
  .stack-language-description {
    font-size: 0.4em;
    max-width: 80%;
  }
}
@media screen and (max-width: 480px) {
  .stack-language-description {
    font-size: 0.4em;
  }
  .stack-language-logo {
  width: 3.5rem;
}
}
</style>