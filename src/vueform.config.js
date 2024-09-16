// vueform.config.(js|ts)

import en from '@vueform/vueform/locales/en'
import vueform from '@vueform/vueform/dist/vueform'
import { defineConfig } from '@vueform/vueform'
import api from './plugin/axios'
import axios from 'axios'

api.defaults.headers.post = {
  'Content-Type': 'application/json'
}
 axios.defaults.baseURL=api.defaults.baseURL;
 axios.defaults.headers=api.defaults.headers;
export default defineConfig({
  theme: vueform,
  locales: { en },
  locale: 'en',
  endpoints: {
    
  },
  axios
})

