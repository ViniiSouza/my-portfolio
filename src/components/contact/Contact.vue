<template>
  <div id="contact__section">
    <h3 id="contact__title">{{ texts[language].contact.title }}</h3>
    <div id="contact__email">
      <p id="contact__email-icon"><i class="bi bi-envelope-paper"></i></p>
      <h4 class="contact__item-title">
        {{ texts[language].contact.email.description }}
      </h4>
      <div id="contact__email__input">
        <div id="contact__email__input__wrapper">
          <span>{{ email }}</span>
          <button @click="copyEmail">
            <i :class="copying ? 'bi bi-check' : 'bi bi-clipboard'"></i>
          </button>
        </div>
      </div>
      <span
        id="contact__email-feedback"
        :class="copying ? 'feedback-animation' : ''"
        >{{ texts[language].contact.email.feedback }}</span
      >
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
      default: 'pt',
    },
  },
  methods: {
    copyEmail() {
      if (!navigator.clipboard) {
        this.copyIos()
      } else {
        navigator.clipboard.writeText(this.email)
      }
      this.copying = true
      setTimeout(() => {
        this.copying = false
      }, 2000)
    },
    copyIos() {
      // from https://gist.github.com/wilsonpage/6f15d9b173584195eaa5dee42215bd81
      const isIos = navigator.userAgent.match(/ipad|iphone/i)
      const textarea = document.createElement('textarea')

      // create textarea
      textarea.value = this.email

      // ios will zoom in on the input if the font-size is < 16px
      textarea.style.fontSize = '20px'
      document.body.appendChild(textarea)
      // select text
      if (isIos) {
        const range = document.createRange()
        range.selectNodeContents(textarea)

        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)
        textarea.setSelectionRange(0, 999999)
      } else {
        textarea.select()
      }

      // copy selection
      document.execCommand('copy')

      // cleanup
      document.body.removeChild(textarea)
    },
  },
}
</script>