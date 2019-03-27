import vue from "vue"
import ToastComponent from "./index.vue"

const ToastConstructor = vue.extend(ToastComponent)

function createInstance(text: any, duration = 1500) {
  const toastDom = new ToastConstructor({
    el: document.createElement("div"),
    data() {
      return {
        text,
        show: true
      }
    }
  })
  document.body.appendChild(toastDom.$el)
  setTimeout(() => {
    toastDom.show = false
  }, duration)
}

function toast() {}

vue.prototype.$toast = createInstance
export default toast
