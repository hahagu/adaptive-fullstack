export default {
    name: 'LoaderComponent',
    methods: {
        startLoading() {
            this.$anime({
                targets: '.loading-overlay',
                duration: 200,
                opacity: 1,
                begin: function() { document.querySelector('.loading-overlay').style.display = "flex"; },
            });
        },
        endLoading() {
            this.$anime({
                targets: '.loading-overlay',
                duration: 200,
                opacity: 0,
                complete: function() { document.querySelector('.loading-overlay').style.display = "none"; },
            });
        }
    }
};
