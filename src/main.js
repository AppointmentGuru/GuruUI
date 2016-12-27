// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import DesktopApp from './layouts/DesktopApp'
import MobileApp from './layouts/MobileApp'
import VueRouter from 'vue-router'
import routes from './routes'

let apps = {
  'desktop': DesktopApp,
  'mobile': MobileApp
}

// let App = DesktopApp
let App = apps.mobile

Vue.use(VueRouter)

// var Component = require('./src/my-component.vue')
// module.exports = Component

const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
