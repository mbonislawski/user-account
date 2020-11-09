import { Options, Vue }         from "vue-class-component";

@Options( {
    props: {
        text: String
    }
} )
export default class FormGroupInvalid extends Vue {
}