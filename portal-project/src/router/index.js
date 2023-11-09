import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import CafePage from '@/components/CafePage.vue'
import BlogPage from '@/components/BlogPage.vue'
import MailPage from '@/components/MailPage.vue'
import TellMe from '@/components/TellMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/cafe',
      component: CafePage
    },
    {
      path: '/blog',
      component: BlogPage
    },
    {
      path: '/mail/:from/:content',
      // path: '/mail',
      name: 'Mail',
      component: MailPage
    },
    {
      path: '/tellme',
      component: TellMe
    }
  ]
})

export default router
