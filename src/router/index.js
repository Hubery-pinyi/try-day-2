import Vue from 'vue'
import VueRouter from 'vue-router'
import Vant from 'vant'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'vant/lib/index.css';

import MyIndex from '../views/MyIndex'
import MyLogin from '../views/MyLogin'

Vue.use(VueRouter)
Vue.use(Vant);
Vue.use(ElementUI)

const routes = [
  {
    path: '/',
    name: 'index',
    component: MyIndex
  },
  {
    path: '/index',
    name: 'index',
    component: MyIndex
  },
  {
    path: '/login',
    name: 'login',
    component:MyLogin
  }
]

const router = new VueRouter({
  routes
})

export default router
