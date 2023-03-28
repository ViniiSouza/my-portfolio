<template>
  <div>
    <div id="knowledge-section">
      <h3 id="knowledge-title">{{ texts[language].knowledge.title }}</h3>
      <p id="knowledge-text">
        {{ texts[language].knowledge.text }}
      </p>

      <Stack
        imgSrc="https://i.imgur.com/FXkCnmH.png"
        stackTitle="C Sharp"
        :stackDescription="texts[language].knowledge.techs.cSharp"
      />

      <Stack
        imgSrc="https://i.imgur.com/VOQvATc.png"
        stackTitle="VueJS"
        :stackDescription="texts[language].knowledge.techs.vue"
      />

      <Stack
        imgSrc="https://i.imgur.com/pSYaNdY.png"
        stackTitle="JavaScript"
        :stackDescription="texts[language].knowledge.techs.javaScript"
      />

      <Stack
        imgSrc="https://i.imgur.com/esMeynM.png"
        stackTitle="SQLServer/Postgre"
        :stackDescription="texts[language].knowledge.techs.sql"
      />

      <Stack
        imgSrc="https://i.imgur.com/iUV9fDa.png"
        stackTitle="React"
        :stackDescription="texts[language].knowledge.techs.react"
      />

      <Stack
        imgSrc="https://i.imgur.com/QcoruCz.png"
        stackTitle="Bootstrap"
        :stackDescription="texts[language].knowledge.techs.bootstrap"
      />

      <Stack
        imgSrc="https://i.imgur.com/UKCDmJf.png"
        stackTitle="HTML"
        :stackDescription="texts[language].knowledge.techs.html"
      />

      <Stack
        imgSrc="https://i.imgur.com/QyM1XAK.png"
        stackTitle="CSS"
        :stackDescription="texts[language].knowledge.techs.css"
      />

      <Stack
        imgSrc="https://i.imgur.com/t4grEz4.png"
        stackTitle="TypeScript"
        :stackDescription="texts[language].knowledge.techs.typeScript"
      />

      <Stack
        imgSrc="https://i.imgur.com/nxWWeEy.png"
        stackTitle="Angular"
        :stackDescription="texts[language].knowledge.techs.angular"
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
      language: this.$route.path.replace("/", ""),
      texts,
    };
  },
  components: { Stack },
  watch: {
    "$route.params.search": {
      handler: function (search) {
        this.language = this.$route.path.replace("/", "");
      },
      deep: true,
      immediate: true,
    },
  },
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