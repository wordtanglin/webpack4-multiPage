declare var require: (filename, resolve) => any

let router: any[] = [
  {
    path: "/",
    redirect: { name: "loginIndex" }
  },
  {
    name: "loginIndex",
    path: "/loginIndex",
    component: (() => import("./components/RouterLazy.vue")) as any
  }
]

export default {
  router
}
