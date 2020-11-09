import { Options, Vue }     from "vue-class-component";
import FormGroupInvalid     from "@/components/Atoms/FormGroupInvalid/index.vue";

@Options( {
    props: {
        value: String,
        isValid: Boolean,
        invalidText: String,
        label: String,
        type: String
    },
    components: {
        FormGroupInvalid
    }
})
export default class InputText extends Vue {
}