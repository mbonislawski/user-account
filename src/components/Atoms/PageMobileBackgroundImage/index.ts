import { Vue } from "vue-class-component";

export default class PageMobileBackgroundImage extends Vue {
    get imageUrl() {
        return require('@/assets/images/lines-bg-mobile.svg')
    }
}