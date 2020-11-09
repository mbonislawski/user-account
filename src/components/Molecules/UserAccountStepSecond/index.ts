import { Options, Vue }         from "vue-class-component";
import StepTitle                from "@/components/Atoms/StepTitle/index.vue";
import UserPhoneNumber          from "@/components/Atoms/UserPhoneNumber/index.vue";
import UserNameInput            from "@/components/Atoms/UserNameInput/index.vue";
import ButtonWithIconNext       from "@/components/Molecules/ButtonWithIconNext/index.vue";
import YesOrNoQuestion          from "@/components/Atoms/YesOrNoQuestion/index.vue";
import DayOfBirth               from "@/components/Atoms/DayOfBirth/index.vue";
import { Watch }                from "vue-property-decorator";
import { IUserAccount }         from "@/interfaces/IUserAccount";
import BaseStep                 from "@/components/Molecules/BaseStep/index.vue";
import BaseForm                 from "@/components/Molecules/BaseForm/index.vue";
import ItemCenter               from "@/components/Molecules/ItemCenter/index.vue";

@Options( {
    components: {
        StepTitle,
        BaseStep,
        BaseForm,
        UserNameInput,
        UserPhoneNumber,
        YesOrNoQuestion,
        ButtonWithIconNext,
        DayOfBirth,
        ItemCenter
    }
} )
export default class UserAccountStepSecond extends Vue {
    userName = '';
    prefix = null;
    phone = '';
    question: string | null = null;
    birthDay = '';
    birthMonth = '';
    birthYear = '';
    validUserName = true;
    isValidForm = true;
    validPrefix = true;
    validPhone = true;
    validQuestion = true;
    validBirth = true;
    isLoading = false;

    get stepSecondTitle() {
        return 'Provide personal information so that we can create a new account for you.';
    }

    get buttonContinueText() {
        return 'Continue';
    }

    handlerSubmit( e: Event ): void {
        e.preventDefault();

        this.isLoading = true;

        this.clearFormErrors();
        this.validateForm();

        if ( !this.isValidForm ) {
            this.isLoading = false;

            return;
        }

        this.submitCreateUserAccount();
    }

    async submitCreateUserAccount() {
        //Unfortunately, at this moment it's not possible to correctly send the data, so the fragment code has been commented out

        // try {
        //     await apiUserAccount().set( this.userData ).then( ( response ) => {
        //         this.$emit( 'submit-step-second' );
        //     } );
        // } catch ( e ) {
        //     throw new Error( e );
        // } finally {
        //     this.isLoading = false;
        // }


        this.$emit( 'submit-step-second' );
    }

    userData(): IUserAccount {
        return {
            userName: this.userName,
            phone: `${ this.prefix }${ this.phone }`,
            question: this.question,
            birthDay: `${ this.birthYear }-${ this.birthMonth }-${ this.birthDay }`
        };
    }

    userBirthValid( birthDate ) {
        return Math.floor( (new Date().getTime() - new Date( birthDate ).getTime()) / 3.154e+10 )
    }

    @Watch( 'userName' )
    onChangeUserNameValue() {
        !this.isValidForm && this.validateUserNameField();
    }

    @Watch( 'prefix' )
    onChangePrefixValue() {
        !this.isValidForm && this.validatePrefixField();
    }

    @Watch( 'phone' )
    onChangePhoneValue() {
        !this.isValidForm && this.validatePhoneField();
    }

    @Watch( 'question' )
    onChangeQuestionValue() {
        !this.isValidForm && this.validateQuestionField();
    }

    @Watch( 'birthDay' )
    onChangeBirthDayValue() {
        !this.isValidForm && this.validateBirth();
    }

    @Watch( 'birthMonth' )
    onChangeBirthMonthValue() {
        !this.isValidForm && this.validateBirth();
    }

    @Watch( 'birthYear' )
    onChangeBirthYearValue() {
        !this.isValidForm && this.validateBirth();
    }

    clearFormErrors() {
        this.isValidForm = true;
        this.validUserName = true;
        this.validPrefix = true;
        this.validPhone = true;
        this.validQuestion = true;
        this.validBirth = true;
    }

    validateUserNameField() {
        if ( this.userName.length < 3 ) {
            this.validUserName = false;

            this.setFormInvalid();
        } else {
            this.validUserName = true;
        }
    }

    validatePrefixField() {
        if ( this.prefix === null ) {
            this.validPrefix = false;

            this.setFormInvalid();
        } else {
            this.validPrefix = true;
        }
    }

    validatePhoneField() {
        if ( this.phone.length !== 9 ) {
            this.validPhone = false;

            this.setFormInvalid();
        } else {
            this.validPhone = true;
        }
    }

    validateQuestionField() {
        if ( this.question === null ) {
            this.validQuestion = false;

            this.setFormInvalid();
        } else {
            this.validQuestion = true;
        }
    }

    validateForm() {
        this.validateUserNameField();
        this.validatePrefixField();
        this.validatePhoneField();
        this.validateQuestionField();
        this.validateBirth();
    }

    setFormInvalid() {
        this.isValidForm = false;
    }


    validateBirth() {
        const fullBirthDate = `${ this.birthYear }-${ this.birthMonth }-${ this.birthDay }`;

        if ( !this.birthDay.length || !this.birthMonth.length || !this.birthYear.length ) {
            this.validBirth = false;

            this.setFormInvalid();

            return;
        }

        this.userMature( fullBirthDate );
    }

    userMature( fullBirthDate ) {
        if ( this.userBirthValid( fullBirthDate ) < 18 ) {
            this.validBirth = false;

            this.setFormInvalid();
        } else {
            this.validBirth = true;
        }
    }
}