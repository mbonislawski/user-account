import { Options, Vue }         from "vue-class-component";
import StepTitle                from "@/components/Atoms/StepTitle/index.vue";
import IconCenter               from "@/components/Atoms/IconCenter/index.vue";
import BaseStep                 from "@/components/Molecules/BaseStep/index.vue";

@Options( {
    components: {
        StepTitle,
        IconCenter,
        BaseStep
    }
} )
export default class UserAccountStepThird extends Vue {
    get stepTitle(): string {
        return 'Congratulation! Your account has been created.';
    }

    get buttonContinueText(): string {
        return 'Continue';
    }

    get iconUrl() {
        return require('@/assets/images/tick.svg')
    }
}