import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import CafePage from '@/components/CafePage.vue'
import BlogPage from '@/components/BlogPage.vue'
import MailPage from '@/components/MailPage.vue'
import TellMe from '@/components/TellMe.vue'
import LoginPage from '@/components/LoginPage.vue'
import { nextTick } from 'vue'

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
      component: BlogPage,
      beforeEnter: (to, from, next) => {
        console.log('blog - beforeEnter')
        let userRole = ''
        if ((userRole = '')) {
          next()
        } else {
          next('Login')
        }
      }
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
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    }
  ]
})

//글로벌 네비게이션 가드 : without next
// router.beforeEach((to, from) => {
//   let isLogin = false

//   if (isLogin || to.path == '/' || to.name == 'Login') {
//     return true
//   } else {
//     console.log('router - beforeEach - else')
//     //return false; //단순히 이동거부
//     return { name: 'Login' }
//   }
// })

//글로벌 네비게이션 가드
// router.beforeEach((to, from, next) => {
//   let isLogin = false

//   if (isLogin || to.path == '/' || to.name == 'Login') {
//     next()
//   } else {
//     console.log('router - beforeEach - else')
//     //return false; //단순히 이동거부
//     next('/login')
//     //next({ name: 'Login' })
//   }
// })

export default router
