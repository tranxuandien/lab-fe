// import Vue from 'vue'
import App from './App.vue'
import Router from './router/index'
import Vueform from '@vueform/vueform'
import vueformConfig from './vueform.config'
import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/main.css'
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { createPinia } from 'pinia'
 


 
const app = createApp(App);
app.use(Router);
app.use(Vueform,vueformConfig);
app.use(Vue3Toastify,
    {
      autoClose: 3000,
      // ...
    })
app.use(createPinia())
app.config.productionTip = false
// app.config.compilerOptions.isCustomElement = (tag) => ['person-details', 'Vueform'].cludes(tag);
app.mount('#app');
