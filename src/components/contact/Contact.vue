<template>
  <div id="contact__section">
    <h3 id="contact__title">{{ texts[language].contact.title }}</h3>
    <div id="contact__email">
      <p id="contact__email-icon"><i class="bi bi-envelope-paper"></i></p>
      <h4>{{ texts[language].contact.email.description }}</h4>
      <div id="contact__email__input">
        <div id="contact__email__input__wrapper">

          <span>{{ email }}</span>
          <button @click="copyEmail"><i :class="copying ? 'bi bi-check' : 'bi bi-clipboard'"></i></button>
        </div>
      </div>
      <span id="contact__email-feedback" :class="copying ? 'feedback-animation' : ''">{{ texts[language].contact.email.feedback }}</span>
    </div>
  </div>
</template>
<script>
import './shared/styles.css'
import texts from '../../assets/texts/texts'

export default {
  data() {
    return {
      texts,
      email: 'vinigsouza.bnu@gmail.com',
      emailIcon: 'bi bi-clipboard',
      copying: false,
    }
  },
  props: {
    language: {
      type: String,
      default: 'pt'
    }
  },
  methods: {
    copyEmail() {
      navigator.clipboard.writeText(this.email)
      this.copying = true
      setTimeout(() => {
        this.copying = false
      }, 2000)
    }
  }
}
</script>