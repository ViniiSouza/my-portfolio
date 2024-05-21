<template>
  <div class="project__card">
    <div class="project__card__wrapper">
      <div class="project__card__laptop">
        <img
          class="project__card__laptop--body"
          src="https://i.imgur.com/gx1bIyJ.png"
        />
        <Transition name="device" mode="out-in">
          <img
            v-if="showImage"
            class="project__card__laptop--img"
            :src="currentImage"
          />
        </Transition>
      </div>
      <div class="project__card__phone">
        <div class="project__card__phone__wrapper">
          <img
            class="project__card__phone--body"
            src="https://i.imgur.com/8Scip30.png"
          />
          <Transition name="device" mode="out-in">
            <img
              v-if="showImage"
              class="project__card__phone--img"
              :src="currentImage2"
            />
          </Transition>
        </div>
      </div>
      <div class="project__card__techs">
        <p v-for="tech in techs" :key="tech" class="project__card__tech-item">
          {{ tech }}
        </p>
      </div>
      <div>
        <h5 class="project__card__description">
          {{ shortDesc }}
        </h5>
        <h2 class="project__card__title">{{ title }}</h2>
      </div>
    </div>
  </div>
</template>
<script>
import './shared/styles.css'

export default {
  data() {
    return {
      currentIndex: 0,
      showImage: true,
    }
  },
  props: {
    language: {
      type: String,
      default: 'pt',
    },
    laptopImgs: {
      type: Array,
    },
    phoneImgs: {
      type: Array,
    },
    techs: {
      type: Array,
      default: [],
    },
    shortDesc: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: '',
    },
  },
  mounted() {
    setInterval(this.changeImage, 5000)
  },
  computed: {
    currentImage() {
      return this.laptopImgs[this.currentIndex]
    },
    currentImage2() {
      return this.phoneImgs[this.currentIndex]
    },
  },
  methods: {
    changeImage() {
      this.showImage = false
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.phoneImgs.length
        this.showImage = true
      }, 500)
    },
  },
}
</script>
