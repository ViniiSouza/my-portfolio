<template>
  <div>
    <div id="knowledge-section">
      <h3 id="knowledge-title">{{ texts[language].knowledge.title }}</h3>
      <NewStack
        v-for="item in filteredTechs"
        :key="item.title"
        :imgSrc="item.imgSrc"
        :stackTitle="item.title"
        :stackDescription="item.description"
      />
    </div>
  </div>
</template>
<script>
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