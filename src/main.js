/*
入口js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import {Button} from 'mint-ui'

// 注册全局组件Button可使用标签<mt-button>
Vue.component(Button.name, Button)

 new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
   router,
   store
})
