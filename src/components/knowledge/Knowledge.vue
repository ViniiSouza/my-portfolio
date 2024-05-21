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
              :stackDescription="item.description"
              @selectStack="setStack(item)"
            />
          </div>
        </div>
        <div v-if="showStackInfo" class="knowledge__stack-info-card">
          <div class="knowledge__stack-info-title">
            {{ stackInformation.title }}
          </div>
          <div class="knowledge__stack-close-button" @click="closeStackInfo">
            &times;
          </div>
          <hr class="mb-3 mx-50" />
          <div class="knowledge__stack-info-description">
            {{ stackInformation.description }}
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
      showStackInfo: false,
      stackInformation: {
        imageSource: '',
        title: '',
        description: '',
      },
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
      if (this.showStackInfo && this.stackInformation) {
        let updatedStack = texts[this.language].knowledge.techs.find(find => find.id == this.stackInformation.id)
        this.setStack(updatedStack)
      }
      this.startTiltEffect()
      this.stopTiltEffect()
    },
    filter(area) {
      this.selectedArea = area
    },
    setStack(stack) {
      this.showStackInfo = true
      this.stackInformation = {
        id: stack.id,
        imageSource: stack.imgSrc,
        title: stack.title,
        description: stack.description,
      }
    },
    closeStackInfo() {
      this.showStackInfo = false
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
  computed: {
    areas() {
      return texts[this.language].knowledge.areas
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