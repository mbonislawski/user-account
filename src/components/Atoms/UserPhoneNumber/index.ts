import { Options, Vue }     from "vue-class-component";
import FormGroupInvalid     from "@/components/Atoms/FormGroupInvalid/index.vue";

@Options( {
    props: {
        prefix: String,
        phone: String,
        validPrefix: Boolean,
        validPhone: Boolean,
        invalidText: String
    },
    components: {
        FormGroupInvalid
    }
} )
export default class UserPhoneNumber extends Vue {
    get prefixesList() {
        return [
            { text: '', value: null },
            { text: '+48 (PL)', value: '48' },
            { text: '+61 (AU)', value: '61' },
            { text: '+43 (AT)', value: '43' },
            { text: '+32 (BE)', value: '32' },
            { text: '+591 (BO)', value: '591' }
            ]
    }
}