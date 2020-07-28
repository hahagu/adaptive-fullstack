export default {
    name: 'AnimatedCross',
    data() {
        return {
            failedTL: ""
        }
    },
    mounted() {
        this.failedTL = this.$anime.timeline({
            autoplay: false,
        });

        // Add children
        this.failedTL.add({
            targets: "#cross_circle",
            duration: 700,
            easing: "easeInOutSine",
            strokeDasharray: 1600,
            strokeDashoffset: 0
        })
        .add({
            targets: "#cross_p1",
            duration: 300,
            easing: "easeOutQuart",
            height: 377
        }, "-=100" )
        .add(
            {
            targets: "#cross_p2",
            duration: 500,
            easing: "easeOutQuart",
            height: 377
        }, "-=100" );
    },
    methods: {
        animateIn() {
            this.failedTL.play();
        },
        animateOut() {
            this.failedTL.reverse();
            this.failedTL.play();
        }
    }
};
