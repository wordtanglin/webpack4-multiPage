import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import routerConfig from "./router.ts"
import store from "./store.ts"

Vue.use(VueRouter)

if (module.hot) {
  module.hot.accept()
}
//开启各种模式
Vue.config.devtools = true
Vue.config.silent = true

let router = new VueRouter({
  mode: "hash",
  base: __dirname,
  routes: routerConfig.router
})

router.beforeEach((to, from, next) => {
  next()
})

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})
