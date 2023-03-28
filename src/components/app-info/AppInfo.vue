<template>
  <div id="info-section">
    <div id="info-header">
      <h3 id="info-title">
        {{ texts[language].appInfo.description }}
      </h3>
    </div>
    <div id="info-content">
      <img id="info-image" src="https://i.imgur.com/VOQvATc.png" />
      <p id="info-text">v.2</p>
      <a
        id="info-project-ref"
        href="https://github.com/ViniiSouza/my-portfolio"
        >{{ texts[language].appInfo.projectLink }}</a
      >
    </div>
  </div>
</template>
<style>
#info-section {
  background-color: rebeccapurple;
  color: white;
  padding: 5rem 0 5rem 0;
}
#info-header {
  margin: 0 0 5rem 0rem;
}

#info-title {
  text-align: center;
  font-family: "Staatliches";
  font-size: 3rem;
}

#info-content {
  text-align: center;
}

#info-image {
  margin-top: -5rem;
  width: 20rem;
  position: relative;
  animation-name: float;
  animation-duration: 6s;
  animation-iteration-count: infinite;
}

#info-text {
  font-family: "Montserrat";
  font-size: 1.2rem;
  margin-top: 1.6rem;
}

#info-project-ref {
  font-family: "Montserrat";
  font-size: 1.2rem;
  margin-top: 1.6rem;
  color: inherit;
}

@keyframes float {
  0% {
    transform: translatey(30px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(30px);
  }
}
@media screen and (max-width: 1024px) {
  #info-title {
    font-size: 2rem;
  }
  #info-text {
    font-size: 1.1rem;
  }
  #info-project-ref {
    font-size: 1.1rem;
  }
  #info-image {
    width: 15rem;
  }
}
@media screen and (max-width: 480px) {
  #info-title {
    font-size: 1.7rem;
  }
  #info-image {
    width: 12rem;
  }
}
</style>

<script>
import texts from "../../assets/texts/texts";

export default {
  data() {
    return {
      texts,
    };
  },
  props: {
    language: {
      type: String,
      default: 'pt'
    },
  },
}
</script>
