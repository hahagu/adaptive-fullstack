export default {
    name: 'AnimatedCheck',
    data() {
        return {
            successTL: ''
        }
    },
    mounted() {
        this.successTL = this.$anime.timeline({
            autoplay: false,
        });

        this.successTL.add({
            targets: "#check_circle",
            duration: 700,
            easing: "easeInOutSine",
            strokeDasharray: 1600,
            strokeDashoffset: 0
        })
        .add({
            targets: "#check_p1",
            duration: 300,
            easing: "easeInExpo",
            height: 138    
        },"-=250")
        .add({
            targets: "#check_p2",
            duration: 500,
            easing: "easeOutExpo",
            height: 260
        });
    },
    methods: {
        animateIn() {
            this.successTL.play();
        },
        animateOut() {
            this.successTL.reverse();
            this.successTL.play();
        }
    }
};
