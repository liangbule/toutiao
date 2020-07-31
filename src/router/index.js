// 引入 vue 依赖
import Vue from 'vue'
// 引入 路由
import VueRouter from 'vue-router'
// 路由home 的组件（1）
import Home from '../views/Home.vue'
// VueRouter 混入到vue中
//this.$router
Vue.use(VueRouter)
// 路由配置(2)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //路由懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
//添加路由规则(3)
const router = new VueRouter({
  // 默认用hash 模式
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
// 路由导出
export default router
