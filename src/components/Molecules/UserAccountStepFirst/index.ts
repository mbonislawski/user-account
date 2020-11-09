import { Options, Vue }         from "vue-class-component";
import StepTitle                from "@/components/Atoms/StepTitle/index.vue";
import ButtonWithIconNext       from "@/components/Molecules/ButtonWithIconNext/index.vue";
import IconCenter               from "@/components/Atoms/IconCenter/index.vue";
import StaticListWithText       from "@/components/Atoms/StaticListWithText/index.vue";
import BaseStep                 from "@/components/Molecules/BaseStep/index.vue";
import ItemCenter               from "@/components/Molecules/ItemCenter/index.vue";

@Options( {
    components: {
        StepTitle,
        ButtonWithIconNext,
        IconCenter,
        StaticListWithText,
        BaseStep,
        ItemCenter
    }
} )
export default class UserAccountStepFirst extends Vue {
    get stepTitle(): string {
        return 'Hi! If ou want create account - continue';
    }

    get buttonContinueText(): string {
        return 'Continue';
    }

    handleSubmitStep( e: Event ): void {
        e.preventDefault();

        this.$emit('submit-step-first');
    }
}