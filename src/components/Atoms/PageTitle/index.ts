import { Options, Vue }         from "vue-class-component";

@Options( {
    props: {
        text: String
    }
} )
export default class PageTitle extends Vue {
}