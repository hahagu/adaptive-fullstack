import HeaderComponent from 'APPJS/components/header-component/HeaderComponent.vue';
import FooterComponent from 'APPJS/components/footer-component/FooterComponent.vue';
import LoaderComponent from 'APPJS/components/loader-component/LoaderComponent.vue';

export default {
    name: 'General',
    components: {
        HeaderComponent,
        FooterComponent,
        LoaderComponent
    },
    methods: {
        startLoading() {
            this.$refs.loader.startLoading();
        },
        endLoading() {
            this.$refs.loader.endLoading();
        }
    }
};