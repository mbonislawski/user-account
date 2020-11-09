import { Options, Vue }             from "vue-class-component";
import PageTitle                    from "@/components/Atoms/PageTitle/index.vue";
import UserAccountBox               from "@/components/Organisms/UserAccountBox/index.vue";
import PageBackgroundImage          from "@/components/Atoms/PageBackgroundImage/index.vue";
import PageMobileBackgroundImage    from "@/components/Atoms/PageMobileBackgroundImage/index.vue";

@Options( {
    components: {
        PageTitle,
        UserAccountBox,
        PageBackgroundImage,
        PageMobileBackgroundImage
    }
} )
export default class UserAccountPage extends Vue {
    get pageTitle() {
        return 'Your account';
    }
}
