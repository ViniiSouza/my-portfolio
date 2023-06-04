<template>
  <div>
    <div id="knowledge__section">
      <h3 id="knowledge__title">{{ texts[language].knowledge.title }}</h3>
      <div id="knowledge__stack-container">
      <div id="knowledge__stack-grid">
        <NewStack
          v-for="item in filteredTechs"
          :key="item.title"
          :imgSrc="item.imgSrc"
          :stackTitle="item.title"
          :stackDescription="item.description"
        />
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
    }
  },
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "./src/assets/webkits/vanilla-tilt.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
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