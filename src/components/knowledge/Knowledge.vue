<template>
  <div>
    <div id="knowledge-section">
      <h3 id="knowledge-title">{{ texts[language].knowledge.title }}</h3>
      <p id="knowledge-text">
        {{ texts[language].knowledge.text }}
      </p>

      <Stack
        v-for="item in texts[language].knowledge.techs"
        :key="item.title"
        :imgSrc="item.imgSrc"
        :stackTitle="item.title"
        :stackDescription="item.description"
      />
    </div>
  </div>
</template>
<script>
import Stack from "./shared/stack/Stack.vue";
import texts from "../../assets/texts/texts";

export default {
  data() {
    return {
      texts,
    }
  },
  props: {
    language: {
      type: String,
      default: 'pt'
    },
  },
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