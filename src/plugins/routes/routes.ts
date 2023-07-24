import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>  import('@/views/homePage.vue') 
  },
  {
    path: '/login',
    name: 'login.page',
    component: () =>  import('@/views/loginPage.vue') 
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
