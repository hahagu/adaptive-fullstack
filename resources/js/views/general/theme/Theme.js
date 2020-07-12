export default {
    name: 'Theme',
    data() {
        return {
            themeKey: ''
        };
    },
    mounted() {
        this.themeKey = this.$root.selectedTheme;
    },
    methods: {
        changeTheme(event) {
            Pace.restart();
            var self = this;
            var value = event.target.value;
            self.$emit('startLoading');
            this.axios
                .get(`/styles/themes/${value}.min.css`, { baseURL: process.env.MIX_APP_URL })
                .then(function() {
                    self.$root.selectedTheme = value;
                    self.setStorage('adaptiveTheme', value);
                })
                .catch(function(error) {
                    self.$root.selectedTheme = 'default';
                });
            self.$emit('endLoading');
        }
    }
};