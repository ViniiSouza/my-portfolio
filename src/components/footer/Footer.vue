<template>
  <footer id="footer__section">
    <p id="footer__content">
      <b>Vinícius Gabriel de Souza</b
      ><a
        class="footer__icon"
        target="_blank"
        href="https://github.com/ViniiSouza"
        ><i class="bi bi-github"></i></a
      ><a
        class="footer__icon"
        target="_blank"
        href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-de-souza/"
        ><i class="bi bi-linkedin"></i
      ></a>
      <a
        class="footer__icon"
        target="_blank"
        :href="
          language == 'pt'
            ? 'https://drive.google.com/file/d/17qtNu3I_ipZLUlbefznrRozJGI4a2Nwv/view?usp=sharing'
            : 'https://drive.google.com/file/d/1XOa4Or4heizqa4aWNHwvkqRCGL4BTOwj/view?usp=sharing'
        "
      >
        <i class="bi bi-file-earmark-text-fill"></i
      ></a>
    </p>
  </footer>
</template>
<script>
import './shared/styles.css'

export default {
  props: {
    language: {
      type: String,
      default: 'pt',
    },
  },
}
</script>
