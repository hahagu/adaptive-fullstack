export default {
    name: 'AnimatedCross',
    methods: {
        animateIn() {
            document.querySelector('#cross_circle')
                .velocity({ strokeWidth: 30 }, 200, 'easeOutExpo')
                .velocity({ strokeDasharray: 1600, strokeDashoffset: 0 }, 700, 'easeInOutSine');

            setTimeout(function() {
                document.querySelector('#cross_p1')
                    .velocity({ height: 377 }, 300, 'easeOutQuart');
            }, 600);
            
            setTimeout(function() {
                document.querySelector('#cross_p2')
                    .velocity({ height: 377 }, 500, 'easeOutQuart');
            }, 700);
        },
        animateOut() {
            document.querySelector('#cross_circle').velocity('reverse');
            document.querySelector('#cross_p1').velocity('reverse');
            document.querySelector('#cross_p2').velocity('reverse');
        }
    }
};
