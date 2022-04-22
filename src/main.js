import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import toast from './components/common/toast/toast.js'
import FastClick from 'fastclick'
import VueLazeLoad from 'vue-lazyload'
Vue.use(VueLazeLoad, {

})
FastClick.attach(document.body);
Vue.use(toast)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  toast
}).$mount('#app')


