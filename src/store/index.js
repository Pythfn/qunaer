import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultcity = '北京'
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
} catch (e) {
  alert('网站需要cookie支持')
}

export default new Vuex.Store({
  state: {
    city: defaultcity
  },
  actions: {
    changeCity (act, city) {
      act.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (mut, city) {
      mut.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  }
})
