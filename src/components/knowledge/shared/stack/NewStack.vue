<template>
  <div class="stack__container" data-tilt data-tilt-max="15" data-tilt-reverse="true" data-tilt-max-glare="0.25" data-tilt-glare="true" data-tilt-scale="1.05">
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
