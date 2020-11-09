import { Options, Vue } from "vue-class-component";

@Options( {
    props: {
        imageBgUrl: String,
        imageTopUrl: String
    }
} )
export default class GBoxLeft extends Vue {
    imageBgUrl!: string;
    imageTopUrl!: string;

}