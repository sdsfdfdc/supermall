import Vue from "vue";
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './acions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    cartList: [

    ]
  },
  getters: {},
  mutations,
  actions,
  modules: {}
})
