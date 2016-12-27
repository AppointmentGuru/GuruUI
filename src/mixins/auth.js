import store from './../store'
import {
  SET_POST_LOGIN_REDIRECT
} from './../store/mutations'

export default {
  store,
  loginRequired (to, from, next) {
    let token = window.localStorage.getItem('appointmentguru_token')
    store.commit('SET_TOKEN', token)
    if (!store.getters.isLoggedIn) {
      // todo: persist the token
      store.commit(SET_POST_LOGIN_REDIRECT, to.path)
      return next('/login')
    }
    return next()
  }
}
