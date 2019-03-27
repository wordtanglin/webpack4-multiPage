import { Component, Vue } from "vue-property-decorator"

@Component({
  components: {}
})
export default class Home extends Vue {
  public user: any = {}

  public get message() {
    return this.user.name ? `${this.user.name} 已登录` : "尚未登录"
  }
}
