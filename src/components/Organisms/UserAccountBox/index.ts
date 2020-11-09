import { Options, Vue }             from "vue-class-component";
import UserAccountStepSecond        from "@/components/Molecules/UserAccountStepSecond/index.vue";
import BoxLeft                      from "@/components/Atoms/BoxLeft/index.vue";
import ProgressBar                  from "@/components/Molecules/ProgressBar/index.vue";
import UserAccountStepFirst         from "@/components/Molecules/UserAccountStepFirst/index.vue";
import UserAccountStepThird         from "@/components/Molecules/UserAccountStepThird/index.vue";

@Options( {
    components: {
        UserAccountStepSecond,
        UserAccountStepFirst,
        BoxLeft,
        ProgressBar,
        UserAccountStepThird
    }
} )
export default class UserAccountBox extends Vue {
    activeBoxNumber = 1;

    get boxLeftImageBgUrl() {
        return require('@/assets/images/user-account-bg1.png')
    }

    get boxActiveStep() {
        return this.activeBoxNumber;
    }

    get activeBoxFirst() {
        return this.boxActiveStep === 1;
    }

    get activeBoxSecond() {
        return this.boxActiveStep === 2;
    }

    get activeBoxThird() {
        return this.boxActiveStep === 3;
    }

    get boxLeftImageTopUrl() {
        return require('@/assets/images/lines.png')
    }

    get progressSteps() {
        return [
            { value: 1, text: 'Intro' },
            { value: 2, text: 'Personal' },
            { value: 3, text: 'Success' }
        ];
    }

    onSubmitStepFirst() {
        this.activeBoxNumber = 2;
    }

    onSubmitStepSecond() {
        this.activeBoxNumber = 3;
    }
}