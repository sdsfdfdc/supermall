const obj = {}
import toast from './Toast.vue'
obj.install = function (Vue) {
  const Contrustor = Vue.extend(toast)
  const Toast = new Contrustor()
  Toast.$mount(document.createElement('div'))
  document.body.appendChild(Toast.$el)
  Vue.prototype.$toast = Toast
}
export default obj
