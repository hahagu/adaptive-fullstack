export default {
    name: 'LoaderComponent',
    methods: {
        startLoading() {
            document.querySelector('.loading-overlay').velocity("fadeIn", { duration: 200 });
        },
        endLoading() {
            document.querySelector('.loading-overlay').velocity("fadeOut", { duration: 200 });
        }
    }
};
