import AnimatedCross from '@/components/animated-cross/AnimatedCross.vue';
import AnimatedCheck from '@/components/animated-check/AnimatedCheck.vue';

export default {
    name: 'Auth',
    components: {
        AnimatedCross,
        AnimatedCheck
    },
    methods: {
        startLoading() {
            document.querySelector('.loading-overlay')
                .velocity({ display: "flex" }, "fadeIn", { duration: 200 });
        },

        endLoading() {
            document.querySelector('.loading-overlay')
                .velocity({ display: "none" }, "fadeOut", { duration: 200 });
        },

        showSuccess(title, message, routeName = '', delay = 2500) {
            var self = this;
            self.endLoading();
            document.querySelector('#success-title').innerHTML = title;
            document.querySelector('#success-message').innerHTML = message;
            
            document.querySelector('#content-card')
                .velocity("fadeOut", {
                    duration: 200,
                    queue: "successQueue",
                    complete: function() {document.querySelector('#content-card').style.display = "none"; }
                });

            setTimeout(function() {
                self.$refs.check.animateOut();
            }, delay - 200);

            document.querySelector('#success-card')
                .velocity("fadeIn", { 
                    duration: 500,
                    queue: "successQueue", 
                    begin: function() { document.querySelector('#success-card').style.display = "block"; },
                    complete: function() { self.$refs.check.animateIn(); } 
                })
                .velocity("fadeOut", { 
                    duration: 200,
                    delay: delay,
                    queue: "successQueue",
                    complete: function() {document.querySelector('#success-card').style.display = "none";}
                });

            if (routeName) {
                setTimeout(function() {
                    self.$router.push({ name: routeName });
                }, delay + 300);
            } else {
                document.querySelector('#content-card')
                    .velocity("fadeIn", { 
                        duration: 500,
                        delay: delay + 700,
                        queue: "successQueue",
                        begin: function() { document.querySelector('#content-card').style.display = "block"; },
                    });
            }

        },

        showError(title, message, routeName = '', delay = 2500) {
            var self = this;
            self.endLoading();
            document.querySelector('#error-title').innerHTML = title;
            document.querySelector('#error-message').innerHTML = message;

            document.querySelector('#content-card')
                .velocity("fadeOut", {
                    duration: 200,
                    queue: "errorQueue",
                    complete: function() {document.querySelector('#content-card').style.display = "none"; }
                });

            setTimeout(function() {
                self.$refs.cross.animateOut();
            }, delay - 200);

            document.querySelector('#error-card')
                .velocity("fadeIn", { 
                    duration: 500,
                    queue: "errorQueue", 
                    begin: function() { document.querySelector('#error-card').style.display = "block"; },
                    complete: function() { self.$refs.cross.animateIn(); } 
                })
                .velocity("fadeOut", { 
                    duration: 200,
                    delay: delay,
                    queue: "errorQueue",
                    complete: function() {document.querySelector('#error-card').style.display = "none";}
                });

            if (routeName) {
                setTimeout(function() {
                    self.$router.push({ name: routeName });
                }, delay + 300);
            } else {
                document.querySelector('#content-card')
                    .velocity("fadeIn", { 
                        duration: 500,
                        delay: delay + 700,
                        queue: "errorQueue",
                        begin: function() { document.querySelector('#content-card').style.display = "block"; },
                    });
            }
        }
    }
};
