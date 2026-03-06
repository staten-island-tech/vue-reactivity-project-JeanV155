import { createRouter, createWebHistory } from 'vue-router'
import Cardsview from '@/components/cardsview.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Cardsview,
    },
   
  ],
})


export default router
