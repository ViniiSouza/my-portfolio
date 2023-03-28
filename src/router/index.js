import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/pt',
      name: 'homePT',
      component: App
    },
    {
      path: '/en',
      name: 'homeEN',
      component: App
    },
    {
      path: '/',
      redirect: '/pt'
    }
  ]
})

export default router
