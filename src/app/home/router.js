let router = [
  {
    path: '/',                         //重定向页面
    redirect: {name: 'loginIndex'}
  },
  {
    name: 'loginIndex',
    path: '/loginIndex',
    //component: ()=> import(/* webpackChunkName: "loginIndex" */ './views/loginIndex'),
    component: function (resolve) {
      require(['./views/loginIndex'], resolve);
    }
  },
  {
    name: 'home',
    path: '/home',
    //component: ()=> import(/* webpackChunkName: "home" */ './views/loginIndex'),
    component: function (resolve) {
      require(['./views/home'], resolve);
    }
  }
];

export default {
  router
}
