export default {
    name: 'AnimatedCheck',
    methods: {
        animateIn() {
            document.querySelector('#check_circle')
                .velocity({ strokeWidth: 30 }, 200, 'easeOutExpo')
                .velocity({ strokeDasharray: 1600, strokeDashoffset: 0 }, 700, 'easeInOutSine');

            setTimeout(function() {
                document.querySelector('#check_p1')
                    .velocity({ height: 138 }, 300, 'easeInExpo');
            }, 500);
            
            setTimeout(function() {
                document.querySelector('#check_p2')
                    .velocity({ height: 260 }, 500, 'easeOutExpo');
            }, 790);
        },
        animateOut() {
            document.querySelector('#check_circle').velocity('reverse');
            document.querySelector('#check_p1').velocity('reverse');
            document.querySelector('#check_p2').velocity('reverse');
        }
    }
};
