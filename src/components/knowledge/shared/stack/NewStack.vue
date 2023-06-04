<template>
  <div class="stack-container">
    <img class="stack__image" :src="imgSrc" />
    <div class="stack__name">{{ stackTitle }}</div>
  </div>
</template>
<script>
// component style
import './shared/style.css'

export default {
  data() {
    return {}
  },
  props: {
    imgSrc: {
      default: 'vazio',
      type: String,
    },
    stackTitle: {
      default: 'vazio',
      type: String,
    },
    stackDescription: {
      default: 'vazio',
      type: String,
    },
  },
}
</script>
