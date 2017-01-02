<template>
<div>
  <logo></logo>
  <el-row type="flex" justify="center" align="center">
    <el-col :lg="6" :md="6" :xs="24" :sm="24">
      <login-form></login-form>
    </el-col>
  </el-row>
</div>
</template>

<script>
import { Col, Row, Notification } from 'element-ui'

import LoginForm from 'components/form/LoginForm'
import Logo from 'components/Logo'

import { auth, database } from 'src/store'
import EventHub from 'src/EventHub'

Vue.use(Col)
Vue.use(Row)

export default {
  created() {
    EventHub
    .$on('loginForm:doLogin', (form) => {
      auth
      .signInWithEmailAndPassword(form.email, form.password)
      .then(() => database.ref('/users'))
      .then(() => this.$router.push('/choose-project'))
      .catch(error => Notification.error({
        title: 'Error',
        message: error.message,
      }))
    })

    EventHub
    .$on('loginForm:doSignup', (form) => {
      auth
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(() => this.$router.push('/choose-project'))
      .catch(error => Notification.error({
        title: 'Error',
        message: error.message,
      }))
    })
  },
  components: {
    LoginForm,
    Logo,
  },
}
</script>
