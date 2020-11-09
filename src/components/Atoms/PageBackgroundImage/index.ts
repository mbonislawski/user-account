import { Vue } from "vue-class-component";

export default class PageBackgroundImage extends Vue {
    get imageUrl() {
        return require('@/assets/images/gradient-bg.svg')
    }
}