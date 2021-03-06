// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from 'src/App'
import '../node_modules/animate.css/animate.css'
import '../theme/index.css'

import routes from 'src/routes'

Vue.use(VueRouter)

export const router = new VueRouter({ routes })

/* eslint-disable no-new */
App.router = router

new Vue(App).$mount('#app')
