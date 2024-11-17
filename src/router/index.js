import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/Product',
    name: 'Product',
    
    component: () => import('../views/Product.vue')
  },
  {
    path: '/Login',
    name: 'Login',
  
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
  
    component: () => import('../views/Register.vue')
  },
  {
    path: '/Grade',
    name: 'Grade',
  
    component: () => import('../views/Gradecal.vue')
  },
  {
    path: '/Addproduct',
    name: 'Addproduct',
  
    component: () => import('../views/Addproduct.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
