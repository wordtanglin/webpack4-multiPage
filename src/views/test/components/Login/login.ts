import { Vue, Component, Prop } from "vue-property-decorator";


@Component({
    name: "login"
})
export default class Login extends Vue {
    public username: string = "";
    public password: string = "";

    @Prop() private readonly user: any;

    private get _user() {
        return this.user;
    }
    private set _user(value: any) {
        this.$emit("update:user", value);
    }

    public login() {
        if (this.username && this.password === "pass") {
            this._user = {
                name: this.username
            };
        } else {
            this._user = {};
        }
    }
}
