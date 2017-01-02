<template>
<div class="login-form">
  <el-input
    class="login-form__input shadow-input"
    placeholder="Email"
    v-model="form.email">
  </el-input>

  <el-input
    class="login-form__input shadow-input"
    placeholder="Password"
    type="password"
    v-model="form.password">
  </el-input>

  <el-row type="flex" justify="center">
    <el-col :span="6">
      <el-button
        class="login-form__button login-button animated-button"
        @click="login"
        type="primary">
        Login
      </el-button>
    </el-col>
  </el-row>

  <el-row type="flex" justify="center">
    <el-col :span="6">
      <el-button
        class="animated-button login-form__button signup-button"
        type="danger"
        @click="signup">
        Signup
      </el-button>
    </el-col>
  </el-row>
</div>
</template>

<script>
import EventHub from 'src/EventHub'

import { Input, Button } from 'element-ui'

Vue.use(Input)
Vue.use(Button)

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      EventHub.$emit('loginForm:doLogin', this.form)
    },
    signup() {
      EventHub.$emit('loginForm:doSignup', this.form)
    },
  },
}
</script>

<style lang="sass">
.login-form
  &__button
    width: 100%;
    margin-bottom: 10px !important;
</style>
