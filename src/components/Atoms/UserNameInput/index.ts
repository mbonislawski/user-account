import { Options, Vue }     from "vue-class-component";
import FormGroupInvalid     from "@/components/Atoms/FormGroupInvalid/index.vue";

@Options( {
    props: {
        userName: String,
        validUserName: Boolean,
        invalidText: String
    },
    components: {
        FormGroupInvalid
    }
})
export default class UserNameInput extends Vue {
}