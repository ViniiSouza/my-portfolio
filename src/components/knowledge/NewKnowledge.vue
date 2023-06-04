<template>
  <div>
    <div id="knowledge__section">
      <h3 id="knowledge__title">{{ texts[language].knowledge.title }}</h3>
      <div id="knowledge__stack-container">
        <div id="knowledge__stack-grid" :class="showStackInfo ? 'test' : ''">
          <NewStack
            v-for="item in filteredTechs"
            :key="item.title"
            :imgSrc="item.imgSrc"
            :stackTitle="item.title"
            :stackDescription="item.description"
            @selectStack="setStack(item)"
          />
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
    </div>
  </div>
</template>
<script>
// component style
import './shared/style.css'
import NewStack from './shared/stack/NewStack.vue'
import texts from '../../assets/texts/texts'

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
    const plugin = document.createElement('script')
    plugin.setAttribute('src', './src/assets/webkits/vanilla-tilt.js')
    plugin.async = true
    document.head.appendChild(plugin)
    this.updateTechs()
  },
  props: {
    language: {
      type: String,
      default: 'pt',
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
    },
    setStack(stack) {
      this.showStackInfo = true
      this.stackInformation = {
        imageSource: stack.imgSrc,
        title: stack.title,
        description: stack.description,
      }
    },
    closeStackInfo() {
      this.showStackInfo = false
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
  components: { NewStack },
}
</script>