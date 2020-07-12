import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators';

export default {
    name: 'ResetPasswordForm',
    data() {
        return {
            email: '',
            password: '',
            confirm: ''
        };
    },
    validations: {
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
            // POST Logic
            this.$emit('startLoading');
            this.axios
                .post('/auth/reset-password', {
                    token: self.$route.params.token,
                    email: self.email,
                    password: self.password,
                    password_confirmation: self.confirm
                })
                .then(function(result) {
                    console.log(result);
                    if (result.data.status == 'success') {
                        self.$emit('showSuccess', 'Success!', 'Password has been reset!', 'login');
                    } else {
                        self.$emit('showError', 'Error!', 'Link Expired!');
                    }
                })
                .catch(function(error) {
                    self.$emit('showError', 'Error!', 'A server error has occurred!');
                });
        }
    }
};
