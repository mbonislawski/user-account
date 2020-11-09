import { Options, Vue }     from "vue-class-component";
import FormGroupInvalid     from "@/components/Atoms/FormGroupInvalid/index.vue";

@Options( {
    props: {
        fieldTitle: String,
        validQuestion: Boolean,
        question: String,
        invalidText: String
    },
    components: {
        FormGroupInvalid
    }
} )
export default class YesOrNoQuestion extends Vue {
}