export default {
    data() {
        return {
            // Custom Variables
            appName: 'Adaptive',
            appMotto: 'Now with Laravel & VueJS',
            appCopyright: 'Defyworks 2017~2019 All Rights Reserved',
            baseUrl: process.env.MIX_APP_URL,

            // App Variables
            selectedTheme: this.getStorage('adaptiveTheme') || 'default',
            cssThemes: [
                { name: 'Default', url: 'default' },
                { name: 'Natural', url: 'natural' },
                { name: 'Natural Dark', url: 'natural-dark' },
                { name: 'Lavender', url: 'lavender' },
                { name: 'Lavender Dark', url: 'lavender-dark' },
                { name: 'Ocean', url: 'ocean' },
                { name: 'Ocean Dark', url: 'ocean-dark' },
                { name: 'Rose', url: 'rose' },
                { name: 'Rose Dark', url: 'rose-dark' }
            ]
        };
    },
    methods: {
        // Utility Functions
        setStorage(name, value) {
            localStorage.setItem(name, value);
            return;
        },

        getStorage(name) {
            return localStorage.getItem(name);
        }
    }
};
