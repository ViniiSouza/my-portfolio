<template>
  <div id="card" @click="modalShow = !modalShow">
    <div id="card-image-section">
      <img id="card-image" :src="imgSrc" />
    </div>

    <div id="card-content">
      <h3 id="card-title">{{ projectName }}</h3>
      <hr />
      <div id="card-technologies">
        <p>{{ techOne }}</p>
        <p>{{ techTwo }}</p>
        <p>{{ techThree }}</p>
      </div>
    </div>

    <b-modal size="xl" :title="projectName" v-model="modalShow" ok-only>
      <p>{{ projectDescription }}</p>
      <p v-if="usedConcepts != ''">{{ language == 'pt' ? 'Conceitos:' : 'Concepts:' }} {{ usedConcepts }}</p>
      <div v-if="videoSrc != ''" class="iframe-container">
        <iframe :src="videoSrc" width="720" height="480"> </iframe>
      </div>
      <div v-else class="text-center">
        <p>
          {{ language == 'pt' ? 'Site do projeto:' : 'Project website:' }} <a
            target="_blank"
            style="color: inherit"
            :href="projectSrc"
            >{{ projectName }}</a
          >
        </p>
      </div>
      <p class="text-center mt-5">
        <a style="color: inherit" target="_blank" :href="gitSrc"> {{ language == 'pt' ? 'Link do projeto' : 'Project link' }}</a>
      </p>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    language: {
      type: String,
      default: 'pt'
    },
    projectName: {
      default: "",
    },
    techOne: {
      default: "",
    },
    techTwo: {
      default: "",
    },
    techThree: {
      default: "",
    },
    imgSrc: {
      default: "",
    },
    modalShow: {
      default: false,
    },
    usedConcepts: {
      default: ""
    },
    projectDescription: {},
    demoSrc: {},
    videoSrc: {},
    gitSrc: {},
    projectSrc: {}
  },
};
</script>
<style>
#card {
  display: inline-block;
  border: 2px solid black;
  width: 300px;
  height: 400px;
  align-items: center;
  margin: 1rem 2rem;
  vertical-align: middle;
}
#card:hover {
  box-shadow: 10px 10px 20px 5px rgba(75, 25, 124, 0.514);
  cursor: pointer;
}

#card-image-section {
  background-color: rebeccapurple;
  border-bottom: 2px solid black;
  min-height: 170px;
  max-height: 170px;
  min-width: 250px;
  max-width: 296px;
  overflow: hidden;
}

#card-image {
  display: block;
  max-width: inherit;
  max-height: inherit;
  width: auto;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}

#card-title {
  font-family: "Staatliches", sans-serif;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: -10px;
}

#card-technologies {
  font-family: "Raleway";
  font-weight: bold;
  text-align: center;
  font-size: 1.3rem;
  padding: 0;
}
.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
}
.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 1500px) {
  #card {
    width: 270px;
    height: 350px;
  }
  #card-title {
    font-size: 1.8rem;
    margin-bottom: -20px;
  }
  #card-technologies {
    font-size: 1.1rem;
  }
}
@media screen and (max-width: 1024px) {
  #card {
    display: block;
    width: 300px;
    height: 350px;
    margin: 1.5rem auto;
  }
  #card-title {
    font-size: 2rem;
    margin-bottom: -20px;
  }
  #card-technologies {
    font-size: 1.2rem;
  }
}
@media screen and (max-width: 480px) {
  #card {
    width: 280px;
    height: 350px;
    margin: 2rem auto;
  }
  #card-title {
    margin-bottom: -20px;
  }
  #card-technologies {
    font-size: 1.15rem;
  }
}
</style>