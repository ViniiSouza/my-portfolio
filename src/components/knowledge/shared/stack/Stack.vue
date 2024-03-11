<template>
  <div
    class="stack__container"
    data-tilt
    data-tilt-max="15"
    data-tilt-reverse="true"
    data-tilt-max-glare="0.25"
    data-tilt-glare="true"
    data-tilt-scale="1.05"
    @click="$emit('selectStack')"
  >
    <img class="stack__image" :src="imgSrc" :alt="`${stackTitle} logo`"/>
    <div class="stack__name">{{ stackTitle }}</div>
  </div>
</template>
<script>
// component style
import './shared/styles.css'

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
