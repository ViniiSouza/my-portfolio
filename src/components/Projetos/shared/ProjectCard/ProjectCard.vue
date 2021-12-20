<template>
  <div id="card">
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
  </div>
</template>
<script>
export default {
  props: {
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
      default:
        "https://rockcontent.com/br/wp-content/uploads/sites/2/2020/02/entrega-de-projeto.png",
    },
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
</style>