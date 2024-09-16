<template>
  <aside class="custom-sidenav">
    <ul>
      <li><router-link to="/">Trang chủ</router-link></li>
      <li><router-link to="/chemical">Hóa chất</router-link></li>
      <li><router-link to="/chemical/register">Đăng kí  hóa chất</router-link></li>
      <li><router-link to="/chemical/import/register">Đăng kí nhập hóa chất</router-link></li>
      <li><router-link to="/chemical/barcode/print">In tem hóa chất</router-link></li>
      <!-- <li><router-link to="/devices">Thiết bị</router-link></li>
      <li><router-link to="/checkin">Thông tin checkin</router-link></li> -->
      <li><router-link to="/about">Giới thiệu</router-link></li>
    </ul>
  </aside>
</template>

<style scoped>
.custom-sidenav {
  width: 250px;
  height: 100vh;
  background-color: #343a40;
  color: white;
  padding: 20px;
  /* position: fixed;
  top: 0;
  left: 0; */
  overflow-y: auto;
}

.custom-sidenav ul {
  list-style-type: none;
  padding: 0;
}

.custom-sidenav ul li {
  margin: 15px 0;
}

.custom-sidenav ul li a {
  color: white;
  text-decoration: none;
}

.custom-sidenav ul li a:hover {
  text-decoration: underline;
}
</style>
