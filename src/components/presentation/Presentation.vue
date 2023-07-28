<template>
  <div id="introduction__section">
    <div class="introduction__hello-text">
      {{ texts[language].presentation.introduction }}
      <div class="introduction__name-container">
        <span ref="name" class="introduction__name-text"
          >Vinícius Gabriel de Souza
        </span>
      </div>
    </div>
    <div class="introduction__profession-text">{{ texts[language].presentation.title }}</div>
    <div class="introduction__description-text">
      {{ texts[language].presentation.description1 }} <br />
      {{ texts[language].presentation.description2 }}
    </div>
  </div>
</template>
<script>
// component style
import "./shared/style.css"
import texts from '../../assets/texts/texts'

export default {
  data() {
    return {
      texts,
    }
  },
  props: {
    language: {
      type: String,
      default: 'pt',
    },
  },
  created() {
    setTimeout(() => {
      this.writeName()
      setInterval(() => {
        this.writeName()
      }, 17200)
    }, 200)
  },
  methods: {
    async writeName() {
      this.getNameReference().classList.add("introduction__name-animation--first")
      this.getNameReference().classList.add("introduction__name-text--full-name")
      await this.setDelay(4000)
      this.getNameReference().classList.replace(
        "introduction__name-animation--first",
        "introduction__name-animation--second"
      )
      this.getNameReference().classList.replace("introduction__name-text--full-name", "introduction__name-text--first-name")
      await this.setDelay(5000)
      this.getNameReference().classList.replace(
        "introduction__name-animation--second",
        "introduction__name-animation--third"
      )
      this.getNameReference().classList.replace("introduction__name-text--first-name", "introduction__name-text--nick-name")
      await this.setDelay(1100)
      this.getNameReference().classList.replace(
        "introduction__name-animation--third",
        "introduction__name-animation--fourth"
      )
      await this.setDelay(1000)
      this.getNameReference().textContent = "Vini"
      await this.setDelay(4000)
      this.getNameReference().classList.replace(
        "introduction__name-animation--fourth",
        "introduction__name-animation--fifth"
      )
      this.getNameReference().classList.remove("introduction__name-text--nick-name")
      await this.setDelay(2000)
      this.getNameReference().classList.remove("introduction__name-animation--fifth")
      this.getNameReference().textContent = "Vinícius Gabriel de Souza"
    },
    setDelay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
    getNameReference() {
      return this.$refs.name
    }
  },
}
</script>
