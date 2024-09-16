import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ChemicalPage from '../views/chemical/ChemicalPage.vue'
import ChemicalRegisterPage from '../views/chemical/ChemicalRegisterPage.vue'
import ChemicalImportRegisterPage from '../views/chemical/ChemicalImportRegisterPage.vue'
import ChemicalBarCodePrintPage from '../views/chemical/ChemicalBarCodePrintPage.vue'
import Register from '@/views/user/Register.vue'
const Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chemical',
      name: 'chemical',
      component: ChemicalPage
    },
    {
      path: '/chemical/register',
      name: 'chemicalRegister',
      component: ChemicalRegisterPage
    },
    {
      path: '/chemical/import/register',
      name: 'chemicalImportRegister',
      component: ChemicalImportRegisterPage
    },
    {
      path: '/chemical/barcode/print',
      name: 'chemicalBarCodePrintPage',
      component: ChemicalBarCodePrintPage
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    // {
    //   path: '/auth',
    //   name: 'auth',
    //   // component: ChemicalPage,
    //   children: [
    //     {
    //       path: '/login',
    //       name: 'login',
    //       // component: ChemicalRegisterPage
    //     },
    //   ]
    // },
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