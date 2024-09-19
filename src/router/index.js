import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import accountRouter from './account'
import userRouter from './user'
import Login from '@/views/auth/Login.vue'
import Layout from '@/views/auth/Layout.vue'
const Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { ...accountRouter },
    { ...userRouter },
    {
      path: '/auth',
      component: Layout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login,
        }
      ]
    },
    // {
    //   path: '/devices',
    //   name: 'devices',
    //   component: DevicePage
    // },
    // {
    //   path: '/checkin',
    //   name: 'checkin',
    //   component: CheckInPage
    // },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
export default Router;