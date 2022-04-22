import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const routes = [
  {
    path: '',
    redirect: '/home',
    component: () => import('../views/home/home.vue'),

  },
  {
    path: '/home',
    component: () => import('../views/home/home.vue')

  },
  {
    path: '/cart',
    component: () => import('../views/cart/cart.vue')

  },
  {
    path: '/category',
    component: () => import('../views/category/category.vue')

  },
  {
    path: '/profile',
    component: () => import('../views/profile/profile.vue')

  },
  {
    path: '/detail/:iid',
    component: () => import('../views/detail/Detail.vue')
  }

]

export default new Router({

  routes,
  mode: 'history',

})
