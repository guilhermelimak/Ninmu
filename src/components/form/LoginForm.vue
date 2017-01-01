<template>
<div>
  <el-input placeholder="Email" v-model="form.email">
  </el-input>

  <el-input placeholder="Password" v-model="form.password">
  </el-input>

  <el-row type="flex" justify="center">
    <el-col :span="12">
      <el-button type="text">
        Signup
      </el-button>
    </el-col>

    <el-col :span="12">
      <el-button type="primary">
        Login
      </el-button>
    </el-col>
  </el-row>
</div>
</template>

<script>
import eventHub from 'src/eventHub'

import { Input, Button } from 'element-ui'
Vue.use(Input)
Vue.use(Button)

export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    }
  },
  methods: {
    submit() {
      eventHub.$emit('loginForm:submit', this.form)
    },
  },
}
</script>

<style lang="sass">

</style>
