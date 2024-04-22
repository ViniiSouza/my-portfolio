<template>
  <section id="contact__section">
    <h3 id="contact__title">{{ texts[language].contact.title }}</h3>
    <div class="contact__item">
      <p class="contact__item-icon"><i class="bi bi-envelope-paper"></i></p>
      <h4 class="contact__item-title">
        {{ texts[language].contact.email.description }}
      </h4>
      <div class="contact__item__input">
        <div class="contact__item__input__wrapper">
          <span>{{ email }}</span>
          <button class="contact__item__action" @click="copyEmail">
            <i :class="copying ? 'bi bi-check' : 'bi bi-clipboard'"></i>
          </button>
        </div>
      </div>
      <span
        class="contact__item-feedback"
        :class="copying ? 'feedback-animation' : ''"
        >{{ texts[language].contact.email.feedback }}</span
      >
    </div>
    <div class="contact__item">
      <p class="contact__item-icon"><i class="bi bi-whatsapp"></i></p>
      <h4 class="contact__item-title">
        {{ texts[language].contact.whatsapp.description }}
      </h4>
      <div class="contact__item__input">
        <div class="contact__item__input__wrapper">
          <span>{{ number }}</span>
          <a
            class="contact__item__action"
            target="_blank"
            href="https://wa.me/5547996458019"
          >
            <i class="bi bi-send"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="contact__item">
      <p class="contact__item-icon"><i class="bi bi-file-earmark-text"></i></p>
      <h4 class="contact__item-title">
        {{ texts[language].contact.cv.description }}
      </h4>
      <div class="contact__item__input">
        <div class="contact__item__input__wrapper">
          <span>Download:</span>
          <a
            class="contact__item__action"
            target="_blank"
            :href="
              language == 'pt'
                ? 'https://drive.google.com/file/d/17qtNu3I_ipZLUlbefznrRozJGI4a2Nwv/view?usp=sharing'
                : 'https://drive.google.com/file/d/1XOa4Or4heizqa4aWNHwvkqRCGL4BTOwj/view?usp=sharing'
            "
          >
            <i class="bi bi-cloud-download"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import './shared/styles.css';
import texts from '../../assets/texts/texts.json';

export default {
  data() {
    return {
      texts,
      email: 'contact@souzavinicius.com',
      emailIcon: 'bi bi-clipboard',
      number: '+55 47 99645-8019',
      copying: false,
    };
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
        this.copyIos();
      } else {
        navigator.clipboard.writeText(this.email);
      }
      this.copying = true;
      setTimeout(() => {
        this.copying = false;
      }, 2000);
    },
    copyIos() {
      // from https://gist.github.com/wilsonpage/6f15d9b173584195eaa5dee42215bd81
      const isIos = navigator.userAgent.match(/ipad|iphone/i);
      const textarea = document.createElement('textarea');

      // create textarea
      textarea.value = this.email;

      // ios will zoom in on the input if the font-size is < 16px
      textarea.style.fontSize = '20px';
      document.body.appendChild(textarea);
      // select text
      if (isIos) {
        const range = document.createRange();
        range.selectNodeContents(textarea);

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textarea.setSelectionRange(0, 999999);
      } else {
        textarea.select();
      }

      // copy selection
      document.execCommand('copy');

      // cleanup
      document.body.removeChild(textarea);
    },
  },
};
</script>
