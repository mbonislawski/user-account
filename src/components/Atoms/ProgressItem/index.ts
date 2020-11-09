import { Options, Vue } from "vue-class-component";

@Options( {
    props: {
        item: Object,
        isActive: Boolean
    }
} )
export default class ProgressItem extends Vue {
    item;

    get stepValue(): string {
        return this.item.value < 9? `0${this.item.value}`: this.item.value;
    }
}