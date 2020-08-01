// 引入vue
import Vue from 'vue'
// 引入app组件
import App from './App.vue'
// 引入路由
import router from './router'
// 引入 vux
import store from './store'
// 引入axios
import axios from './common/axios'
// 在vue原型上添加axios
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

// 创建一个实例
new Vue({
  router,  // vue-router
  store,   // vuex
  render: h => h(App) //将APP组件渲染到#app
}).$mount('#app')
