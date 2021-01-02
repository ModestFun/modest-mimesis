import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/article'
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('../views/Article.vue')
  },
  {
    path: '/article/:id',
    name: 'articleDetail',
    component: () => import('../views/ArticleDetail.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import('../views/About.vue')
  },
  {
    path: '/interact',
    name: 'interact',
    component: () => import('../views/About.vue')
  },
  {
    path: '/diary',
    name: 'diary',
    component: () => import('../views/About.vue')
  },
  {
    path: '/friend',
    name: 'friend',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
