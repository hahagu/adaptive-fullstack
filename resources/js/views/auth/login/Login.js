import { required, minLength, maxLength } from 'vuelidate/lib/validators';

export default {
    name: 'Login',
    data() {
        return {
            login: '',
            password: ''
        };
    },
    validations: {
        login: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(30)
        },
        password: {
            required,
            minLength: minLength(3)
        }
    },
    methods: {
        submit() {
            var self = this;
            this.$v.$touch();
            if (this.$v.$invalid) return;
            // POST Logic
            this.$emit('startLoading');
            this.$auth.login({
                params: {
                    login: this.login,
                    password: this.password
                },
                success: function() {
                    self.$emit('showSuccess', 'Success!', 'You will be redirected in a moment!', 'home');
                },
                error: function() {
                    self.$emit('showError', 'Incorrect!', 'You username or password is incorrect!');
                },
                rememberMe: true,
                fetchUser: true
            });
        }
    }
};
