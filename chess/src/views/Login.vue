<template>
  <div class="page">
    <div class="login">
      <h2 style="margin-bottom: 40px;">Sign in</h2>
      <small v-if="errorShow" class="fieldError" style="margin-top: 50px;">invalid username or password</small>
      <p>username</p>
      <input
        type="text"
        class="textField"
        ref="username"
        v-model="user.username">
      <small class="fieldError">{{ errorMessages.username }}</small>

      <p>password</p>
      <input
        type="password"
        class="textField"
        ref="password"
        v-model="user.password">
      <small class="fieldError">{{ errorMessages.password }}</small>

      <v-btn class="submit-btn" @click="submit">SIGN IN</v-btn>

      <v-checkbox :value="checkBoxValue" label="Keep me logged in" dense style="margin-top: 10px;"></v-checkbox>

      <div class="buttons">
        <span class="btn" @click="register">Register</span>
        <span class="btn" @click="passwordReset">Password reset</span>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'Login',
  data() {
    return{
      user: {
        username: '',
        password: ''
      },
      errorMessages: {
        username: '',
        password: ''
      },
      errorShow: false,
      checkBoxValue: false,
      token: 'invalid',
    }
  },
  methods: {
    async submit() {
      let validate = true

      // check if empty
      Object.keys(this.user).forEach((attr) => {
        if (this.user[attr] == '') {
          validate = false
          this.$refs[attr].style.borderColor = '#C62828'
          this.$refs[attr].style.borderWidth = '3px'
          this.errorMessages[attr] = "this field can't be empty"
        }
        else {
          this.$refs[attr].style.borderColor = '#333333'
          this.$refs[attr].style.borderWidth = '2px'
          this.errorMessages[attr] = ''
        }
      })

      // check if username exists & username and password match
      if (validate) {
        await api.auth.login(this.user).then((response) => {
          this.errorShow = false
          this.token = response.data.access
        }).catch((error) => {
          this.errorShow = true
          validate = false
        })
      }
      else
        this.errorShow = false

      if (validate) {
        localStorage.setItem('username', this.user.username)
        localStorage.setItem('token', this.token)
        this.$router.push('/')
      }
    },
    register() {
      this.$router.push('/signup')
    },
    passwordReset() {
      // TODO
    }
  }
}
</script>

<style scoped>
.page{
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - var(--navbar-height));
}
.login{
  width: 30%;
  /* height: 100%; */
  background-color: var(--bgcolor1);
  padding: 40px;
}
h2{
  color: var(--black1);
  margin: 10px auto;
  font-size: 2.369em;
}
.subText{
  font-size: 0.65em;
  opacity: var(--opacity-level);
  position: relative;
  top: -25px;
}
.textField{
  margin: 0;
  margin-bottom: 25px;
  padding: 5px;
  width: 100%;
  height: 40px;
  border: 2px solid var(--black1);
  border-radius: 5px;
}
.textField:focus{
  outline: none;
  border-color: black;
  border-width: 3px;
}
.fieldError{
  display: block;
  font-size: 0.75em;
  position: relative;
  top: -25px;
  color: var(--red2);
}
.submit-btn{
  background-color: var(--blue) !important;
  width: 100%;
  margin-top: 30px;
}
.buttons{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.btn{
  color: #1976D2;
  margin: auto;
  cursor: pointer;
}
.btn:hover{
  color: #1E88E5;
}
</style>