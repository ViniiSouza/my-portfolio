<template>
  <div>
    <div class="floating-button">
      <div
        style="border: 2px solid rebeccapurple; border-radius: 5px"
        class="language-option"
        @click="openSelect"
      >
        <img class="language-image" :src="languageSelected.img" :alt="`${languageSelected.name} flag`"/>
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
            src="https://i.imgur.com/NkFj6Ni.jpg"
            alt="portuguese language flag"
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
            src="https://i.imgur.com/7Lrop29.png"
            alt="english language flag"
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
        img: "https://i.imgur.com/NkFj6Ni.jpg",
        name: "Português",
        value: "pt",
      },
    };
  },
  created() {
    if (this.$route.query.language && ['en', 'pt'].includes(this.$route.query.language.toLowerCase())) {
      this.changeLanguage(this.$route.query.language)
    }
    else {
      if (Object.keys(this.$route.query).length > 0) {
        this.$router.replace({ query: {} }).catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            throw err
          }
        })
      }
      this.changeLanguage(localStorage.language || 'pt')
    }
  },
  methods: {
    openSelect() {
      this.open = !this.open;
    },
    changeLanguage(language) {
      localStorage.setItem('language', language != null ? language : 'pt')
      if (language == "pt" || !language) {
        this.languageSelected = {
          img: "https://i.imgur.com/NkFj6Ni.jpg",
          name: "Português",
          value: "pt",
        }
      } else {
        this.languageSelected = {
          img: "https://i.imgur.com/7Lrop29.png",
          name: "English",
          value: "en",
        }
      }
      this.open = false
      this.$emit('languageChanged')
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
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .floating-button {
    background-color: rgba(1,1,1,0);
    bottom: 40px;
    left: 10px;
    top: inherit;
    right: inherit;
    width: 40px;
  }
  .option-language-text {
    display: none;
  }
  .language-option {
    column-gap: 0;
    width: 44px;
  }
  .language-image {
    width: 40px;
  }
}
</style>