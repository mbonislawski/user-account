import { Options, Vue } from "vue-class-component";

@Options( {
    props: {
        text: String,
        className: String
    }
} )
export default class StepTitle extends Vue {
}