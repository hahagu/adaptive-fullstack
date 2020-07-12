export default {
    name: 'VerifyEmail',
    mounted() {
        this.verify();
    },
    methods: {
        verify() {
            this.$emit('startLoading');
            var self = this;
            this.axios
                .post('/auth/email-verify', {
                    expires: self.$route.params.expires,
                    signature: self.$route.params.signature,
                    id: self.$route.params.id
                })
                .then(function(result) {
                    if (result.data.status == 'success') {
                        self.$emit('showSuccess', 'Success!', 'Email has been verified!', 'home');
                    } else {
                        if (result.data.reason == 'invalid_signature')
                            self.$emit('showError', 'Error!', 'Link has expired or has been malformed!', '', 0);
                        else if (result.data.reason == 'already_verified')
                            self.$emit('showError', 'Error!', 'Your email has already been verified!', '', 0);
                        else if (result.data.reason == 'no_user')
                            self.$emit('showError', 'Error!', "There's no user associated with this email!", '', 0);
                    }
                })
                .catch(function(error) {
                    self.$emit('showError', 'Error!', 'A server error has occurred!', '', 0);
                });
        }
    }
};
