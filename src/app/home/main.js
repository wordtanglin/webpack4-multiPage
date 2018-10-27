import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routerConfig from "./router";
import store from './store';

Vue.use(VueRouter);

if (module.hot) {
  module.hot.accept();
}

//开启各种模式
Vue.config.debug = true;
Vue.config.devtools = true;
Vue.config.silent = true;

let router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: routerConfig.router
});

router.beforeEach((to, from, next) => {
  next();
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});


