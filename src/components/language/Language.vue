<template>
  <div>
    <div class="floating-button">
      <div
        style="border: 2px solid rebeccapurple; border-radius: 5px"
        class="language-option"
        @click="openSelect"
      >
        <img class="language-image" :src="languageSelected.img" />
        <p class="option-language-text">{{ languageSelected.name }}</p>
      </div>
      <div v-if="open" class="language-options">
        <div
          v-if="languageSelected.value != 'pt'"
          class="language-option"
          @click="changeLanguage('pt')"
        >
          <img
            class="language-image"
            src="https://recreio.uol.com.br/media/uploads/historia/brasil_e_portugal_capa.jpg"
          />
          <p class="option-language-text">Português</p>
        </div>
        <div
          v-if="languageSelected.value != 'en'"
          class="language-option"
          @click="changeLanguage('en')"
        >
          <img
            class="language-image"
            src="https://cdn.w600.comps.canstockphoto.com.br/bandeira-l%C3%ADngua-ingl%C3%AAs-banco-de-ilustra%C3%A7%C3%A3o_csp8895196.jpg"
          />
          <p class="option-language-text">English</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      languageSelected: {
        img: "https://recreio.uol.com.br/media/uploads/historia/brasil_e_portugal_capa.jpg",
        name: "Português",
        value: "pt",
      },
    };
  },
  created() {
    this.changeLanguage(this.$route.path.replace('/', ''))
  },
  methods: {
    openSelect() {
      this.open = !this.open;
    },
    changeLanguage(language) {
      if (language == "pt") {
        this.languageSelected = {
          img: "https://recreio.uol.com.br/media/uploads/historia/brasil_e_portugal_capa.jpg",
          name: "Português",
          value: "pt",
        }
      } else {
        this.languageSelected = {
          img: "https://cdn.w600.comps.canstockphoto.com.br/bandeira-l%C3%ADngua-ingl%C3%AAs-banco-de-ilustra%C3%A7%C3%A3o_csp8895196.jpg",
          name: "English",
          value: "en",
        }
      }
      this.open = false
      if (this.$route.path != `/${language}`) this.$router.push(`/${language}`)
    },
  },
};
</script>

<style scoped>
.floating-button {
  user-select: none;
  position: fixed;
  width: 180px;
  top: 20px;
  right: 40px;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 1px 1px 2px #888;
  z-index: 1000;
}
.option-language-text {
  margin: 0;
  padding: 0;
  width: 50px;
}
.language-option {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  width: 180px;
  column-gap: 5px;
  cursor: pointer;
}
.language-option:hover {
  background-color: #bbbbbb;
  transition: 0.3s;
}
.language-image {
  display: inline;
  width: 50px;
}
</style>