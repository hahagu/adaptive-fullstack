import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators';

export default {
    name: 'ResetPassword',
    data() {
        return {
            email: ''
        };
    },
    validations: {
        email: {
            required,
            email,
            minLength: minLength(3),
            maxLength: maxLength(255)
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
                .post('/auth/send-reset', {
                    email: self.email
                })
                .then(function(result) {
                    if (result.data.status == 'success') {
                        self.$emit('showSuccess', 'Success!', 'Email has been sent!', 'home');
                    } else {
                        self.$emit('showError', 'Error!', 'There is no user by that email!');
                    }
                })
                .catch(function(error) {
                    self.$emit('showError', 'Error!', 'A server error has occurred!');
                });
        }
    }
};
