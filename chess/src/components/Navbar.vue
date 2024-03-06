<template>
  <div class="navbar">
    <h1 class="title" @click="landingPage">chess</h1>

    <v-menu v-for="menu in menus" offset-y open-on-hover>
      <template v-slot:activator="{ attrs, on }">
        <div class="navbar-btn"
        v-bind="attrs"
        v-on="on"
        ><p>{{ menu }}</p></div>
      </template>

      <v-list class="list-left-border" dense>
        <v-list-item v-for="item in lists[menu]" :key="item.id" class="list-left-border-item" @click="listClick(item.name)">
          {{ item.name }}
        </v-list-item>
      </v-list>
    </v-menu>

    <p class="donate">DONATE</p>

    <v-menu v-if="isLoggedIn" offset-y left>
      <template v-slot:activator="{ attrs, on }">
        <p
        class="username-btn"
        
        v-on="on"
        @click="usernameClick"
        v-click-outside="usernameClickOut"
        ref="username">
        {{ username }}</p>
      </template>

      <v-list class="list" :elevation="0" dense>
        <v-list-item v-for="item in lists.usernameList" :key="item.id" class="list-item" @click="listClick(item.name)">
          <v-list-item-icon>
            <v-icon :color="item.color" style="margin-right: 5px;" size="23">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          {{ item.name }}
        </v-list-item>
        <v-list-item class="sign-out" @click="listClick('Sign out')">
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
import api from '@/api'

export default{
  name: 'navbar',
  data() {
    return{
      navbarKey: 0,
      username: null,
      token: null,
      isLoggedIn: false,
      menus: ['PLAY', 'PUZZLES', 'LEARN', 'TOOLS'],
      lists: {
        usernameList: [
          {id: 1, name: 'Profile', icon: 'mdi-circle-medium', color: '#388E3C'},
          {id: 2, name: 'Inbox', icon: 'mdi-email', color: '#efefef'},
          {id: 3, name: 'Preferences', icon: 'mdi-cog', color: '#efefef'},
        ],
        PLAY: [
          {id: 1, name: 'Create a game'},
          {id: 2, name: 'Arena tournaments'},
        ],
        PUZZLES: [
        {id: 1, name: 'Puzzles'},
        {id: 2, name: 'Puzzle Dashboard'},
        {id: 3, name: 'Puzzle Streak'},
        {id: 4, name: 'Puzzle Storm'},
        {id: 5, name: 'Puzzle Racer'},
        ],
        LEARN: [
        {id: 1, name: 'Chess basics'},
        {id: 2, name: 'Practice'},
        {id: 3, name: 'Coordinates'},
        {id: 4, name: 'Study'},
        ],
        TOOLS: [
        {id: 1, name: 'Analysis board'},
        {id: 2, name: 'Openings'},
        {id: 3, name: 'Board editor'},
        {id: 4, name: 'Import game'},
        ]
      }
    }
  },
  async mounted() {
    this.username = localStorage.getItem('username')
    this.token = localStorage.getItem('token')

    await api.auth.tokenVerify({token: this.token}).then((response) => {
      this.isLoggedIn = true
    }).catch((error) => {
      this.isLoggedIn = false
    })
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
    listClick(name) {
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
*{
  --list-color: #414141;
}
.navbar{
  background-color: #262421;
  height: var(--navbar-height);
  display: flex;
}
.signin-btn{
  position: absolute;
  color: #2d91cf !important;
  right: 0px;
  padding: calc(var(--navbar-height)/2 - 15px) 15px;
  font-size: 0.9em !important;
  opacity: var(--opacity-level);
  cursor: pointer;
}
.signin-btn:hover{
  opacity: 1;
}
.username-btn{
  position: absolute;
  color: var(--white) !important;
  right: 0px;
  font-size: 0.9em !important;
  opacity: calc(var(--opacity-level) + 0.15);
  cursor: pointer;
  padding: calc(var(--navbar-height)/2 - 15px) 15px;
}
.username-btn:hover{
  opacity: 1;
}
.title{
  font-size: 1.9em;
  margin: auto 10px ;
  color: var(--white);
  cursor: pointer;
}
.title:hover{
  color: #2d91cf;
}
.list{
  background-color: var(--list-color);
  width: 180px;
  padding: 4px 0;
}
.list-item{
  cursor: pointer;
  color: var(--white) !important;
  min-height: 40px;
  font-size: 0.7em;
  padding: 0 5px;
  font-weight: 400;
}
.list-item:hover{
  background-color: #689F38;
}
.list-left-border{
  background-color: var(--list-color);
  width: 150px;
  padding: 4px 0;
  border-left: 3px solid #2d91cf;
}
.list-left-border-item{
  cursor: pointer;
  color: var(--white) !important;
  min-height: 40px;
  font-size: 0.7em;
  padding: 0 5px;
  font-weight: 400;
  opacity: 0.8;
}
.list-left-border-item:hover{
  background-color: #2d91cf;
  opacity: 1;
}
.v-menu__content{
  /* box-shadow: none; */
  box-shadow: 0px 5px 0px -3px rgba(0, 0, 0, 0.2), 0px 8px 0px 0px rgba(0, 0, 0, 0.14), 0px 3px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 0;
  border-top: none;
}
.clicked{
  background-color: var(--list-color) !important;
  opacity: 1;
  height: var(--navbar-height);
}
.sign-out{
  cursor: pointer;
  color: var(--white) !important;
  min-height: 40px;
  font-size: 0.7em;
  padding: 0 5px;
  font-weight: 400;
}
.sign-out:hover{
  background-color: #D32F2F;
}
.navbar-btn{
  color: var(--white) !important;
  padding: 10px;
  opacity: var(--opacity-level);
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar-btn:hover{
  opacity: 1;
  cursor: pointer;
  background-color: var(--list-color) !important;
  border-left: 3px solid #2d91cf;
  padding-left: 7px;
}
.navbar-btn p{
  font-size: 0.7em !important;
}
.donate{
  color: #bf811d !important;
  margin: auto 0px;
  padding: 10px;
  font-size: 0.7em !important;
}
.donate:hover{
  cursor: pointer;
  color: #2d91cf !important;
}
</style>