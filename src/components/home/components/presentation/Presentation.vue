<template>
  <div id="introduction__section">
    <div class="introduction__hello-text">
      Olá, eu sou o
      <div class="introduction__name-container">
        <span ref="name" class="introduction__name-text"
          >Vinícius Gabriel de Souza
        </span>
      </div>
    </div>
    <div class="introduction__profession-text">FullStack Developer</div>
    <div class="introduction__description-text">
      Desenvolvedor de software com mais <br />
      de 2 anos de sólida experiência.
    </div>
  </div>
</template>
<script>
// component style
import "./shared/style.css"

export default {
  data() {
    return {}
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
      this.getNameReference().classList.add("first-animation")
      this.getNameReference().classList.add("full-name")
      await this.setDelay(4000)
      this.getNameReference().classList.replace(
        "first-animation",
        "second-animation"
      )
      this.getNameReference().classList.replace("full-name", "first-name")
      await this.setDelay(5000)
      this.getNameReference().classList.replace(
        "second-animation",
        "third-animation"
      )
      this.getNameReference().classList.replace("first-name", "nick-name")
      await this.setDelay(1100)
      this.getNameReference().classList.replace(
        "third-animation",
        "fourth-animation"
      )
      await this.setDelay(1000)
      this.getNameReference().textContent = "Vini"
      await this.setDelay(4000)
      this.getNameReference().classList.replace(
        "fourth-animation",
        "fifth-animation"
      )
      this.getNameReference().classList.remove("nick-name")
      await this.setDelay(2000)
      this.getNameReference().classList.remove("fifth-animation")
      this.getNameReference().textContent = "Vinícius Gabriel de Souza"
    },
    setDelay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
  },
}
</script>
