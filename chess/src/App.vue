<template>
  <div>
    <nav class="navbar">
      <h1 class="title" @click="landingPage">chess</h1>
      <v-btn class="signin-btn" plain @click="signin">sign in</v-btn>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    landingPage() {
      this.$router.push('/').catch(()=>{});
    },
    signin() {
      this.$router.push('/login').catch(()=>{});
    }
  }
}
</script>

<style>
* {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 22px;
}
body{
  background-color: #BDBDBD;
}
.navbar{
  background-color: #424242;
  height: 70px;
  /* max-height: 70px; */
  display: flex;
}
.navbar-btn{
  background-color: inherit !important;
  color: #FAFAFA !important;
  margin: auto 10px;
  font-size: 1em !important;
}
.signin-btn{
  position: absolute;
  background-color: inherit !important;
  color: #2d91cf !important;
  right: 5px;
  top: 15px;
  font-size: 1em !important;
}
.title{
  font-size: 2.369em;
  margin: auto 10px ;
  color: #ffffff;
  cursor: pointer;
}
</style>