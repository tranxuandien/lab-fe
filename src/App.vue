<template>
  <div id="app">
    <Header />
    <div class="container-fluid">
      <div class="row">
        <SideNav class="col-md-3" />
        <main class="col-md-9">
          <router-view></router-view>
        </main>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SideNav from './components/SideNav.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    SideNav,
    Footer
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  padding: 20px;
}
</style>

<style>
@import './../node_modules/@vueform/vueform/dist/vueform.css';
</style>
