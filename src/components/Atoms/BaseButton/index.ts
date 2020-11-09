import { Options, Vue } from "vue-class-component";

@Options( {
    props: {
        variant: String,
        type: String
    }
} )
export default class BaseButton extends Vue {
    variant!: string;

    get variantClassName() {
        return `btn-${ this.variant }`
    }

    get arrowIconUrl() {
        return require('@/assets/images/arrow.png')
    }
}