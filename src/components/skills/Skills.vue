<template>
  <div id="skills__container">
    <div id="skills__code-section">
      <code id="skills__code-container">
        <code class="skills__code-header">Portfolio > skills.json</code>
        <ol class="skills__code-line-numbers">
          <li>
            <pre class="skills__code--bracket">{{ codeStructure.name }}</pre>
          </li>
          <div
            v-for="(content, index) in codeStructure.content"
            :key="content.name"
          >
            <li>
              <pre class="skills__code--property">{{ content.name }}</pre>
            </li>
            <li>
              <pre
                contenteditable
                class="skills__code--string"
                @blur="updateValue($event, index)"
                >{{ content.value }}</pre
              >
            </li>
            <li>
              <pre class="skills__code--punctuation">{{ content.end }}</pre>
            </li>
          </div>
          <li><pre class="skills__code--bracket">}</pre></li>
        </ol>
      </code>
    </div>
    <div id="skills__result-container">
      <h4 class="skills__result__title">Skills</h4>
      <div v-for="skill in skills" :key="skill.title" class="skills__result__item">
        <h6 class="skills__result__item-title">{{skill.title}}</h6>
        <p class="skills__result__item-description">{{skill.value}}</p>
      </div>
    </div>
  </div>
</template>
<script>
// component style
import './shared/style.css'

export default {
  data() {
    return {
      codeStructure: {
        name: '{',
        content: [
          {
            name: 'mostConfidentWith',
            value:
              '"C Sharp", "JavaScript", "VueJS", "React", "SQL", "Bootstrap"',
            end: '],',
          },
          {
            name: 'goodKnowledge',
            value:
              '"Angular", "State management libraries (Redux and Vuex)", "Docker"',
            end: '],',
          },
          {
            name: 'canManageWithHelp',
            value: '"Java", "Python", "AWS", "TypeScript"',
            end: ']',
          },
        ],
      },
      skills: [
          {
            title: 'Most confident with',
            value: 'C Sharp, JavaScript, VueJS, React, SQL and Bootstrap.',
          },
          {
            title: 'I have good knowledge on',
            value: 'Angular, State management libraries (redux and vuex) and docker.',
          },
          {
            title: 'I can manage with some help',
            value: 'Java, Python, AWS and TypeScript.',
          },
        ],
    }
  },
  methods: {
    updateValue(event, index) {
      this.codeStructure.content[index].value = event.target.innerText
      this.skills[index].value = this.updateResult(event.target.innerText)
    },
    updateResult(text) {
      text = text.trim()
      text = text.replaceAll('"', '')
      text = text.replaceAll(', ', ',')
      text = text.replaceAll('  ', ' ')

      var items = text.split(',')

      if (items.length === 1) {
        return items[0];
      }
      var lastItem = items.pop()
      var formattedItems = items.join(', ')

      return formattedItems + ' and ' + lastItem
    }
  },
}
</script>