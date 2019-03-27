let router: any[] = [
  {
    path: "/",
    redirect: { name: "home" }
  },
  {
    name: "home",
    path: "/home",
    component: (reslove: any) =>
      require.ensure([], () => reslove(require("./views/Home/home.vue")))
  }
]

export default {
  router
}
