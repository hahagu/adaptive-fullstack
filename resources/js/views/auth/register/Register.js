import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators';

export default {
    name: 'Register',
    data() {
        return {
            name: '',
            username: '',
            email: '',
            password: '',
            confirm: ''
        };
    },
    validations: {
        name: {
            required,
            maxLength: maxLength(1000)
        },
        username: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(30)
        },
        email: {
            required,
            email,
            minLength: minLength(3),
            maxLength: maxLength(255)
        },
        password: {
            required,
            minLength: minLength(8)
        },
        confirm: {
            minLength: minLength(8),
            sameAsPass: sameAs('password')
        }
    },
    methods: {
        submit() {
            var self = this;
            this.$v.$touch();
            if (this.$v.$invalid) return;
            // POST logic here
            this.$auth.register({
                data: {
                    username: this.username,
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    password_confirmation: this.confirm
                },
                success: function() {
                    self.$emit('showSuccess', 'Registered!', 'You will be redirected in a moment!', 'login');
                },
                error: function() {
                    self.$emit('showError', 'Failed!', 'Registration Failed! Your username may be taken!');
                }
            });
        }
    }
};
