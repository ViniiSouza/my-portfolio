<template>
  <div id="skills__container">
    <div id="skills__code-section">
      <code id="skills__code-container">
        <code class="skills__code-header">Portfolio > skills.json</code>
        <ol class="skills__code-line-numbers">
          <li>
            <pre class="skills__code--bracket">{{ codeContent.name }}</pre>
          </li>
          <div v-for="(content, index) in codeContent.content" :key="content.name">
            <li>
              <pre class="skills__code--property">{{
                content.name
              }}</pre>
            </li>
            <li>
              <pre contenteditable class="skills__code--string" @blur="updateValue($event, index)">{{
                content.content
              }}</pre>
            </li>
            <li>
              <pre class="skills__code--punctuation">{{ content.end }}</pre>
            </li>
          </div>
        </ol>
      </code>
    </div>
    <div id="skills__result-container">COLUNA B</div>
  </div>
</template>
<script>
// component style
import './shared/style.css'

export default {
  data() {
    return {
      codeContent: {
        name: 'skills: {',
        content: [
          {
            name: 'mostConfidentWith',
            content: '"C Sharp", "JavaScript", "VueJS", "React", "SQL", "Bootstrap"',
            end: '],',
          },
          {
            name: 'goodKnowledge',
            content:
              '"Angular", "State management libraries (Redux and Vuex)", "Docker"',
            end: '],',
          },
          {
            name: 'canManageWithHelp',
            content: '"Java", "Python", "AWS", "TypeScript"',
            end: ']',
          },
        ],
      },
    }
  },
  methods: {
    updateValue(event, index, name) {
        this.codeContent.content[index].content = event.target.innerText
    },
  },
}
</script>