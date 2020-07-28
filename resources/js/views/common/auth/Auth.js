import AnimatedCross from 'APPJS/components/animated-cross/AnimatedCross.vue';
import AnimatedCheck from 'APPJS/components/animated-check/AnimatedCheck.vue';
import LoaderComponent from 'APPJS/components/loader-component/LoaderComponent.vue';

export default {
    name: 'Auth',
    data() {
        return {
            crossRenderKey: 0,
            checkRenderKey: 0,
            successTL: "",
            errorTL: ""
        };
    },
    components: {
        AnimatedCross,
        AnimatedCheck,
        LoaderComponent
    },
    mounted() {
        let self = this;

        this.successTL = this.$anime.timeline({
            autoplay: false
        });

        this.successTL
            .add({
                targets: '#content-card',
                duration: 200,
                opacity: 0,
                complete: function() {
                    document.querySelector('#content-card').style.display = "none";
                }
            })
            .add({
                targets: '#success-card',
                duration: 500,
                opacity: 1,
                begin: function() { document.querySelector('#success-card').style.display = "block"; },
                complete: function() { self.$refs.check.animateIn(); } 
            }, "0")
            .add({
                duration: 2500,
                complete: function() { self.$refs.check.animateOut(); }
            })
            .add({
                targets: '#success-card',
                duration: 1500,
                opacity: 0,
                complete: function() { document.querySelector('#success-card').style.display = "none"; }
            }, '+=1500');

        this.errorTL = this.$anime.timeline({
            autoplay: false
        });

        this.errorTL
            .add({
                targets: '#content-card',
                duration: 200,
                opacity: 0,
                complete: function() {
                    document.querySelector('#content-card').style.display = "none";
                }
            })
            .add({
                targets: '#error-card',
                duration: 500,
                opacity: 1,
                begin: function() { document.querySelector('#error-card').style.display = "block"; },
                complete: function() { self.$refs.cross.animateIn(); } 
            }, "0")
            .add({
                duration: 2500,
                complete: function() { self.$refs.cross.animateOut(); }
            })
            .add({
                targets: '#error-card',
                duration: 1500,
                opacity: 0,
                complete: function() { document.querySelector('#error-card').style.display = "none"; }
            }, '+=1500');
    },
    methods: {
        rerenderCross() {
            this.crossRenderKey += 1;
        },

        rerenderCheck() {
            this.checkRenderKey += 1;
        },
        
        startLoading() {
            this.$refs.loader.startLoading();
        },

        endLoading() {
            this.$refs.loader.endLoading();
        },

        showSuccess(title, message, routeName = '') {
            let self = this;
            self.endLoading();
            self.rerenderCheck();
            document.querySelector('#success-title').innerHTML = title;
            document.querySelector('#success-message').innerHTML = message;

            this.successTL.play();

            this.successTL.finished.then(function() {
                if (routeName) {
                    self.$router.push({ name: routeName });
                } else {
                    self.$router.push({ name: 'Home' });
                }
            });
        },

        showError(title, message, routeName = '') {
            let self = this;
            self.endLoading();
            self.rerenderCross();
            document.querySelector('#error-title').innerHTML = title;
            document.querySelector('#error-message').innerHTML = message;

            this.errorTL.play();

            this.errorTL.finished.then(function() {
                if (routeName) {
                    self.$router.push({ name: routeName });
                } else {
                    self.$anime({
                        targets: '#content-card',
                        duration: 1500,
                        opacity: 1,
                        begin: function() { document.querySelector('#content-card').style.display = "block"; },
                    });
                }
            });
        }
    }
};
