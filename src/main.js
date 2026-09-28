import { createApp } from 'vue'
import { inject } from '@vercel/analytics'

import '@fontsource-variable/familjen-grotesk'
import '@fontsource-variable/jetbrains-mono'
import '@fontsource-variable/jetbrains-mono/wght-italic.css'
import './styles/main.css'

import App from './App.vue'
import { reveal } from './composables/reveal'

inject()

createApp(App).directive('reveal', reveal).mount('#app')
