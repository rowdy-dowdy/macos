import { createRouter, createWebHistory } from 'vue-router'
import { store } from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'Home / Viet hung'},
    component: () => import('../views/home/home.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    meta: { title: 'Auth / Viet hung'},
    redirect: '/auth/login',
    component: () => import('../views/auth/auth.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/auth/login.vue'),
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: { title: 'Page Not Found / Viet Hung'},
    component: () => import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { 
      el: '#app',
      top: 0 
    }
  },
})

export default router