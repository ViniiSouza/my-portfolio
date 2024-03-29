import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '*',
      redirect: () => {
        return { path: '/' }
      }
    }
  ]
})

export default router
