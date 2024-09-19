import Register from '@/views/account/Register.vue'
import Layout from '@/views/account/Layout.vue'

export default {
  path: '/account',
  component: Layout,
  children: [
    {
      path: 'register',
      name: 'register',
      component: Register,
    }
  ],
}