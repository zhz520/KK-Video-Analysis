import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/layout/index.vue'),
      redirect: '/main',
      children: [
        {
          path: '/main',
          name: 'main',
          component: () => import('@/views/main/index.vue')
        },
        {
          path: '/tutorial',
          name: 'tutorial',
          component: () => import('@/views/tutorial/index.vue')
        }
      ]
    }
  ]
})

export default router
