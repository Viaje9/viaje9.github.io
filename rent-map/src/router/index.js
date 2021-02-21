import Vue from 'vue'
import VueRouter from 'vue-router'
import Map from '../views/Map.vue'
import Index from '../views/Index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/Map',
    component: Map
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
