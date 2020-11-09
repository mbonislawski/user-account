import { Options, Vue }     from "vue-class-component";
import BaseButton           from "@/components/Atoms/BaseButton/index.vue";

@Options( {
    props: {
        text: String,
        variant: String
    },
    components: {
        BaseButton
    }
} )
export default class ButtonWithIconNext extends Vue {
    get arrowIconUrl() {
        return require('@/assets/images/arrow.png')
    }
}