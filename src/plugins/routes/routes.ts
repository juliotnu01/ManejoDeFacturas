import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/homePage.vue'),

  },
  {
    path: '/login',
    name: 'login.page',
    component: () => import('@/views/loginPage.vue'),
    beforeEnter: (to:any, from:any, next:any) => {
	console.log(to,from,next);
      const variableEnLocalStorage = localStorage.getItem('token');

      if (variableEnLocalStorage != null) {
        // Variable seteada como true, redirigir al origen
        next('/'); // Redirige al origen (from.path)
      } else {
        // Variable no seteada o seteada como false, permite la navegación normalmente
        next();
      }
    }
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router
