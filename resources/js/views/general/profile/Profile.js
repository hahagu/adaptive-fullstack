export default {
    name: 'Profile',
    methods: {
        updateProfile() {
            var formData = new FormData();
            formData.append('avatar', document.querySelector('#avatarUpload').files[0]);

            this.axios
                .post('/auth/update', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(function() {
                    window.location.reload();
                })
                .catch(function(error) {
                    console.log(error);
                    alert('An error has occured! Please retry.');
                });
        }
    }
};
