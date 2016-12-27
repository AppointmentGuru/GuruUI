import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import MainDocs from './pages/MainDocs'
import HelloDocs from './pages/HelloDocs'
import TodoDocs from './pages/TodoDocs'

// schedule
export default [
  // pages:
  { path: '/', component: MainDocs, name: 'default' },
  { path: '/hello', component: HelloDocs, name: 'Hello' },
  { path: '/todo', component: TodoDocs, name: 'Todo' }
]
