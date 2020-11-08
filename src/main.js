/*
入口js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'
//引入过滤器
import './filters'

// 注册全局组件Button可使用标签<mt-button>
Vue.component(Button.name, Button)
Vue.use(VueLazyload,{ //内部自定义了一个指令lazy
  loading
})



//因为mockServer不需要暴露出来，import方式类似导入css样式
import './mock/mockServer'

 new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
   router,
   store
})
