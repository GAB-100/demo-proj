import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/crimes-region',
    name: 'WestCrimes',
    component: () => import('@/views/crimes-region.vue'),
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
