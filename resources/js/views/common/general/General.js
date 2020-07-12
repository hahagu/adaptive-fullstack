import HeaderComponent from '@/components/header-component/HeaderComponent.vue';
import FooterComponent from '@/components/footer-component/FooterComponent.vue';
import LoaderComponent from '@/components/loader-component/LoaderComponent.vue';

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
