<template>
  <div>
    <nav class="navbar">
      <h1 class="title" @click="landingPage">chess</h1>
      <v-btn class="navbar-btn" plain @click="signup">signup</v-btn>
      <v-btn class="navbar-btn" plain @click="login">login</v-btn>
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
    signup() {
      this.$router.push('/signup').catch(()=>{});
    },
    login() {
      this.$router.push('/login').catch(()=>{});
    }
  }
}
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}
.navbar{
  background-color: #424242;
  height: 70px;
  display: flex;
  /* text-align: center; */
  /* justify-content: left; */
}
.navbar-btn{
  background-color: inherit !important;
  color: #FAFAFA !important;
  margin: auto 10px;
  font-size: 1.1em !important;
}
.title{
  font-size: 3em;
  margin: auto 10px ;
  color: #ffffff;
  cursor: pointer;
}
body{
  background-color: #BDBDBD;
}
</style>