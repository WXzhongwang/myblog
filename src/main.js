// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import VueProgressBar from 'vue-progressbar'
import '@/assets/styles/global.scss'
import '@/assets/font/iconfont.css'
import App from './App'
import router from './router'
import axios from 'axios'

import Mock from './mock/mock' 
//axios.defaults.baseURL = 'http://mockjs.com' 
axios.defaults.baseURL = 'http://localhost:8080/ssm' 
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.use(VueProgressBar, {
  color: '#16a085',
  failedColor: '#874b4b',
  height: '4px',
  transition: {
    speed: '1s',
    opacity: '0.6s',
    termination: 300
  },
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})