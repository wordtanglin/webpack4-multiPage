import vue from "vue"
import toastComponent from "./index.vue"

const ToastConstructor = vue.extend(toastComponent)

function showToast(text, duration = 1500) {
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

function registryToast() {
  vue.prototype.$toast = showToast
}

export default registryToast
