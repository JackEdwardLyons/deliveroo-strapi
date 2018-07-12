/*
* Most of the time, PWA's store a JSON Web Token (JWT) in local storage. 
* That works pretty well, and this is what the Strapi JavaScript SDK does by default.
* However, we need to store the username in the header so we need to store it somewhere.
* Since Nuxt supports server-side rendering, which does not have access to the local storage, 
* we need to store it in the cookies.
*/
import Cookies from 'js-cookie'

export const state = () => {}

export const mutations = {
  setUser(state, user) {
    state.user = user
    Cookies.set('user', user)
  },
  logout(state) {
    state.user = null
    Cookies.set('user', null)
  }
}

export const getters = {
  username: state => {
    return state.user && state.user.username
  }
}