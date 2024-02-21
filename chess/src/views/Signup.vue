<template>
  <div class="page">
    <div class="register">
      <h2>Register</h2>
      <p style="margin-top: 40px;">username</p>
      <input
        type="text"
        class="textField"
        ref="username"
        v-model="user.username">
      <small class="fieldError">{{ errorMessages.username }}</small>
      <small class="subText">Be sure to choose a family-friendly username. You cannot change it later, and any accounts with inappropriate usernames will be closed!</small>

      <p>password</p>
      <input
        type="password"
        class="textField"
        ref="password"
        v-model="user.password">
      <small class="fieldError">{{ errorMessages.password }}</small>

      <p>Email</p>
      <input
        type="text"
        class="textField"
        ref="email"
        v-model="user.email">
      <small class="fieldError">{{ errorMessages.email }}</small>
      <small class="subText">We will only use it for password reset.</small>

      <div>
        <v-icon size="60" :color="checkBoxColor" @click="checkBoxClick">{{ checkBoxIcon }}</v-icon>
        <p class="agreements" @click="checkBoxClick">I agree that I will always be nice to other players.</p>
      </div>

      <v-btn class="btn" @click="submit">REGISTER</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return{
      checkBoxIcon: 'mdi-toggle-switch-off',
      checkBoxColor: '#C62828',
      checkBoxValue: false,
      user: {
        username: '',
        password: '',
        email: ''
      },
      errorMessages: {
        username: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    checkBoxClick() {
      this.checkBoxValue = !this.checkBoxValue 
      if (this.checkBoxValue) {
        this.checkBoxIcon = 'mdi-toggle-switch'
        this.checkBoxColor = '#2E7D32'
      }
      else {
        this.checkBoxIcon = 'mdi-toggle-switch-off'
        this.checkBoxColor = '#C62828'
      }
    },
    validateEmail() {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
      if (this.user.email != '' && emailRegex.test(this.user.email)) {
        return true
      }
      return false
    },
    submit() {
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

      // validate email
      if (this.validateEmail()) {
        this.$refs.email.style.borderColor = '#333333'
        this.$refs.email.style.borderWidth = '2px'
        this.errorMessages.email = ''
      }
      else if (this.errorMessages.email == '') {
        validate = false
        this.$refs.email.style.borderColor = '#C62828'
        this.$refs.email.style.borderWidth = '3px'
        this.errorMessages.email = 'please enter a valid email'
      }

      // validate agreements
      if (!this.checkBoxValue)
        validate = false

      // final result
      if (validate)
        console.log('ok');
    }
  }
}
</script>

<style scoped>
.page{
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
}
.register{
  width: 40%;
  height: 100%;
  background-color: #9E9E9E;
  padding: 40px;

}
h2{
  color: #333333;
  margin: 10px auto;
  font-size: 2.369em;
}
p{
  margin-bottom: 10px;
}
.btn{
  background-color: #2d91cf !important;
  width: 100%;
  margin-top: 30px;
}
.subText{
  font-size: 0.75em;
  opacity: 0.62;
  position: relative;
  top: -4%;
}
.textField{
  margin: 0;
  margin-bottom: 5%;
  padding: 5px;
  width: 100%;
  height: 50px;
  border: 2px solid #333333;
  border-radius: 5px;
}
.textField:focus{
  outline: none;
  border-color: black;
  border-width: 3px;
}
.checkBox  {
  font-size: 600px !important;
}
.agreements{
  font-weight: 300;
  font-size: 0.9em;
  display: inline;
  cursor: pointer;
}
.fieldError{
  display: block;
  font-size: 0.75em;
  /* opacity: 0.62; */
  position: relative;
  top: -4%;
  color: #C62828;
}
</style>