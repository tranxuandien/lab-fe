<template>
  <header class="bg-primary text-white p-3">
    <div class="container">
      <h1>Quản lý phòng thí nghiệm</h1>
    </div>
    <div v-if="user" class="d-flex flex-row-reverse">Xin chào {{ user.username }}</div>
    <div v-if="user" class="d-flex flex-row-reverse"><a href="#" @click="logout">Đăng xuất</a></div>
  </header>
</template>
<script>
import { useAuthStore } from '@/stores/auth';

export default {
  data() {
    return { user: null }
  },
  methods: {
    logout() {
      const { logout } = useAuthStore();
      logout();
    }
  },
  mounted() {
    const { user } = useAuthStore();
    this.user = user.data.userDto;
  }
}
</script>
