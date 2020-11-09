import { Options, Vue }             from "vue-class-component";
import ProgressItem                 from "@/components/Atoms/ProgressItem/index.vue";

@Options( {
    props: {
        steps: Array,
        activeStep: Number
    },
    components: {
        ProgressItem
    }
} )
export default class ProgressBar extends Vue {
    activeStep;

    stepActive(value) {
        return value == this.activeStep;
    }
}