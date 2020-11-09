import { Options, Vue }     from "vue-class-component";
import FormGroupInvalid     from "@/components/Atoms/FormGroupInvalid/index.vue";

@Options( {
    props: {
        birthDay: String,
        birthMonth: String,
        birthYear: String,
        validBirth: Boolean,
        invalidText: String
    },
    components: {
        FormGroupInvalid
    }
} )
export default class DayOfBirth extends Vue {
    birthDay = '';
    birthMonth = '';
    birthYear = '';
    days: { value: string }[] = [];
    months: { text: string; value: string | null }[] = [];
    years: { value: string }[] = [];

    created() {
        this.generateDays( 31 );
        this.generateMonths();
        this.generateYears();
    }

    generateDays( length: number ): void {
        this.days = [ ...Array( length ).keys() ]
            .map( ( i ) => {
                return { value: i < 9 ? `0${ i + 1 }` : `${ i + 1 }` }
            } );

        this.days.unshift( { value: '' } );
    }

    generateMonths(): void {
        this.months = [ "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December" ].map( ( item: string, i: number ) => {
            return { value: i < 9 ? `0${ i + 1 }` : `${ i + 1 }`, text: item }
        } );

        this.months.unshift( { value: null, text: '' } );
    }

    generateYears(): void {
        this.years = [ ...Array( 2020 - 1920 + 1 ).keys() ].map( ( _, id ) => {
            return { value: `${ 1920 + id }` }
        } );

        this.years.unshift( { value: '' } );
    }

    daysInSelectedMonthAndYear( month: string, year: string ): number {
        return new Date( Number(year), Number(month), 0 ).getDate();
    }

    onChangeBirthDay( event): void {
        this.$emit( 'update:birthDay', event.target.value );

        console.log( 'change', event.target.value )
    }

    onChangeBirthMonth( event ): void {
        this.$emit( 'update:birthMonth', event.target.value );

        this.checkValidBirthDay( event.target.value, this.birthYear );
    }

    onChangeBirthYear( event ): void {
        this.$emit( 'update:birthYear', event.target.value );

        this.checkValidBirthDay( this.birthMonth, event.target.value );
    }

    checkValidBirthDay( month: string, year: string ): void {
        if ( !year.length || !month.length ) {
            return;
        }

        const daysInSelectedMonthAndYear: number = this.daysInSelectedMonthAndYear( month, year );

        this.generateDays( daysInSelectedMonthAndYear );

        this.updateBirthDayAfterUpdate(daysInSelectedMonthAndYear)
    }

    updateBirthDayAfterUpdate(daysNumber: number): void {
        if ( Number( this.birthDay ) > daysNumber ) {
            this.$emit( 'update:birthDay', '' );
        } else {
            this.$emit( 'update:birthDay', this.birthDay );
        }
    }
}