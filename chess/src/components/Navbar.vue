<template>
  <div class="navbar">
    <h1 class="title" @click="landingPage">chess</h1>
    <v-menu v-if="isLoggedIn" offset-y>
      <template v-slot:activator="{ attrs, on }">
        <p
        class="username-btn"
        v-bind="attrs"
        v-on="on"
        @click="usernameClick"
        v-click-outside="usernameClickOut"
        ref="username">
        {{ username }}</p>
      </template>

      <v-list class="list" :elevation="0" dense>
        <v-list-item v-for="item in usernameList" :key="item.id" class="list-item" @click="usernameListClick(item.name)">
          <v-list-item-icon>
            <v-icon :color="item.color" style="margin-right: 5px;" size="23">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          {{ item.name }}
        </v-list-item>
        <v-list-item class="sign-out" @click="usernameListClick('Sign out')">
          <v-list-item-icon>
            <v-icon color="#efefef" style="margin-right: 5px;" size="23">mdi-power</v-icon>
          </v-list-item-icon>
          Sign out
        </v-list-item>
      </v-list>
    </v-menu>
    <p v-else class="signin-btn" @click="signin">sign in</p>
  </div>
</template>

<script>
export default{
  name: 'navbar',
  data() {
    return{
      navbarKey: 0,
      username: null,
      token: null,
      isLoggedIn: false,
      usernameList: [
        {id: 1, name: 'Profile', icon: 'mdi-circle-medium', color: '#388E3C'},
        {id: 2, name: 'Inbox', icon: 'mdi-email', color: '#efefef'},
        {id: 3, name: 'Preferences', icon: 'mdi-cog', color: '#efefef'},
      ]
    }
  },
  mounted() {
    this.username = localStorage.getItem('username')
    this.token = localStorage.getItem('token')

    if (this.token != 'invalid') {
      this.isLoggedIn = true
    }
  },
  methods: {
    landingPage() {
      this.$router.push('/').catch(()=>{});
    },
    signin() {
      this.$router.push('/login').catch(()=>{});
    },
    usernameClick() {
      if (this.$refs.username.classList.contains('clicked'))
        this.$refs.username.classList.remove('clicked')
      else
        this.$refs.username.classList.add('clicked')
    },
    usernameClickOut() {
      if (this.$refs.username)
        this.$refs.username.classList.remove('clicked')
    },
    usernameListClick(name) {
      if (name == 'Profile') {
        // TODO 
      }
      else if (name == 'Inbox') {
        // TODO 
      }
      else if (name == 'Preferences') {
        // TODO 
      }
      else if (name == 'Sign out') {
        localStorage.setItem('token', 'invalid')
        this.$emit('update-navbar')
      }
    }
  },
}
</script>

<style scoped>
.navbar{
  background-color: #424242;
  height: 70px;
  display: flex;
}
.navbar-btn{
  background-color: inherit !important;
  color: var(--white) !important;
  margin: auto 10px;
  font-size: 1em !important;
}
.signin-btn{
  position: absolute;
  background-color: inherit !important;
  color: #2d91cf !important;
  right: 15px;
  top: 20px;
  font-size: 1em !important;
  opacity: 0.62;
  cursor: pointer;
}
.signin-btn:hover{
  opacity: 1;
}
.username-btn{
  position: absolute;
  background-color: inherit !important;
  color: var(--white) !important;
  right: 0px;
  font-size: 1em !important;
  opacity: 0.62;
  cursor: pointer;
  padding: 20px 15px;
  height: 70px;
}
.username-btn:hover{
  opacity: 1;
}
.title{
  font-size: 2.369em;
  margin: auto 10px ;
  color: var(--white);
  cursor: pointer;
}
.title:hover{
  color: #2d91cf;
}
.list{
  background-color: #616161;
  width: 200px;
  padding: 4px 0;
}
.v-menu__content{
  box-shadow: none;
  border-radius: 0;
  top: 70px !important;
  left: auto !important;
  right: 0 !important;
  border-top: none;
}
.clicked{
  background-color: #616161 !important;
  opacity: 1;
}
.list-item{
  cursor: pointer;
  color: var(--white) !important;
  min-height: 40px;
  font-size: 0.85em;
  padding: 0 5px;
  font-weight: 400;
}
.list-item:hover{
  background-color: #689F38;
}
.sign-out{
  cursor: pointer;
  color: var(--white) !important;
  min-height: 40px;
  font-size: 0.85em;
  padding: 0 5px;
  font-weight: 400;
}
.sign-out:hover{
  background-color: #D32F2F;
}
</style>