export default {
    name: 'HeaderComponent',
    data() {
        return {
            isActive: false
        };
    },
    watch: {
        $route(to, from) {
            this.closeMenu();
        }
    },
    methods: {
        // App Functions
        toggleMenu() {
            if (this.isActive) {
                this.closeMenu();
            } else {
                this.openMenu();
            }
            this.isActive = !this.isActive;
        },
        openMenu() {
            // Animate Navigation
            document.querySelector('.nav-links').classList.add('nav-active');
            // Animate Links
            let elements = document.querySelectorAll('.nav-links li');
            Array.prototype.forEach.call(elements, function(link, index){
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            });
            // Animate Burger
            document.querySelector('.burger').classList.add('toggle');
        },
        closeMenu() {
            document.querySelector('.nav-links').classList.remove('nav-active');
            let elements = document.querySelectorAll('.nav-links li');
            Array.prototype.forEach.call(elements, function(link, index){
                link.style.animation = '';
            });
            document.querySelector('.burger').classList.remove('toggle');
        }
    }
};
