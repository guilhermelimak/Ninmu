<template>
<div>
  <el-row type="flex" justify="center" align="center">
    <el-col :span="12">
      <login-form></login-form>
    </el-col>
  </el-row>
</div>
</template>

<script>
import Vue from 'vue'
import LoginForm from 'components/form/LoginForm'
import EventHub from 'src/EventHub'

import { Col, Row } from 'element-ui'

Vue.use(Col)
Vue.use(Row)

export default {
  created() {
    EventHub
    .$on('loginForm:doLogin', (form) => {

    })

    EventHub
    .$on('loginForm:doSignup', (form) => {

    })
  },
  components: {
    LoginForm,
  },
}
</script>

<style>
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

