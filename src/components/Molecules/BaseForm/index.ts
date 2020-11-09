import { Options, Vue } from "vue-class-component";

@Options( {
    props: {
       action: String
    }
} )
export default class BaseForm extends Vue {
}