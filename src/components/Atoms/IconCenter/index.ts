import { Options, Vue } from "vue-class-component";

@Options( {
    props: {
        iconUrl: String,
        alt: String
    }
} )
export default class IconCenter extends Vue {
}