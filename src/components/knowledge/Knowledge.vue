<template>
    <section id="knowledge__section">
      <h2 id="knowledge__title">{{ texts[language].knowledge.title }}</h2>
      <div id="knowledge__stack-container">
        <div id="knowledge__stack-container-grid">
          <div id="knowledge__stack-filter-grid">
            <button
              v-for="area in areas"
              :key="area.value"
              class="knowledge__stack-area-button"
              :class="
                selectedArea == area.value
                  ? 'knowledge__stack-area-button--active'
                  : ''
              "
              :aria-label="`${texts[language].knowledge.ariaLabels.filterBy} ${area.text}`"
              :aria-pressed="selectedArea === area.value"
              @click="filter(area.value)"
            >
              {{ area.text }}
            </button>
          </div>
          <div id="knowledge__stack-grid">
            <Stack
              v-for="item in filteredTechs"
              :key="item.id"
              :imgSrc="item.imgSrc"
              :stackTitle="item.title"
            />
          </div>
        </div>
      </div>
    </section>
</template>
<script>
// component style
import './shared/styles.css'
import Stack from './shared/stack/Stack.vue'
import texts from '../../assets/texts/texts.json'

export default {
  data() {
    return {
      texts,
      selectedArea: 'all',
      filteredTechs: texts[this.language].knowledge.techs,
    }
  },
  mounted() {
    this.startTiltEffect()
    this.updateTechs()
  },
  props: {
    language: {
      type: String,
      default: 'pt',
    },
  },
  computed: {
    areas() {
      return texts[this.language].knowledge.areas
    },
  },
  methods: {
    updateTechs() {
      if (this.selectedArea == 'all')
        this.filteredTechs = texts[this.language].knowledge.techs
      else
        this.filteredTechs = texts[this.language].knowledge.techs.filter(
          (item) => item.area == this.selectedArea
        )
      this.startTiltEffect()
      this.stopTiltEffect()
    },
    filter(area) {
      this.selectedArea = area
    },
    startTiltEffect() {
      const plugin = document.createElement('script')
      plugin.setAttribute('src', './assets/webkits/vanilla-tilt.js')
      plugin.async = true
      document.head.appendChild(plugin)
    },
    stopTiltEffect() {
      const scriptElement = document.querySelector(
        'script[src="./assets/webkits/vanilla-tilt.js"]'
      )
      document.head.removeChild(scriptElement)
    },
  },
  watch: {
    selectedArea() {
      this.updateTechs()
    },
    language() {
      this.updateTechs()
    },
  },
  components: { Stack },
}
</script>