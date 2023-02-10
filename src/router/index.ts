import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonagemView from '../views/PersonagemView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pokemon',
    name: 'personagem',
    component: PersonagemView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
