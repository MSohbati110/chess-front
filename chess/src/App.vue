<template>
  <div data-app>
    <Navbar :key="navbarKey" @update-navbar="updateNavbar"></Navbar>
    <router-view @update-navbar="updateNavbar"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'app',
  components: { Navbar },
  data() {
    return{
      navbarKey: 1
    }
  },
  methods: {
    updateNavbar() {
      this.navbarKey++
    }
  }
}
</script>

<style>
* {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 22px;
  --white: #efefef;
  --navbar-height:60px;
  --opacity-level: 0.62;
}
body{
  background-color: #353535;
  /* background-color: #bdbdbd; */
}
</style>