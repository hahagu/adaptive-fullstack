import VueRouter from 'vue-router';
import GeneralTemplate from './views/common/general/General.vue';
import BlankTemplate from './views/common/blank/Blank.vue';
import AuthTemplate from './views/common/auth/Auth.vue';

export default new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            component: GeneralTemplate,
            meta: {
                auth: undefined
            },
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('./views/general/home/Home.vue'),
                    meta: {
                        auth: undefined,
                        title: 'Home'
                    }
                },
                {
                    path: 'elements',
                    name: 'elements',
                    component: () => import('./views/general/elements/Elements.vue'),
                    meta: {
                        auth: undefined,
                        title: 'Elements'
                    }
                },
                {
                    path: 'themes',
                    name: 'theme-selector',
                    component: () => import('./views/general/theme/Theme.vue'),
                    meta: {
                        auth: true,
                        title: 'Theme Selector'
                    }
                },
                {
                    path: 'profile',
                    name: 'profile-page',
                    component: () => import('./views/general/profile/Profile.vue'),
                    meta: {
                        auth: true,
                        title: 'Profile'
                    }
                }
            ]
        },
        {
            path: '/',
            component: AuthTemplate,
            meta: {
                auth: undefined
            },
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('./views/auth/login/Login.vue'),
                    meta: {
                        auth: false,
                        title: 'Login'
                    }
                },
                {
                    path: 'register',
                    name: 'register',
                    component: () => import('./views/auth/register/Register.vue'),
                    meta: {
                        auth: false,
                        title: 'Register'
                    }
                },
                {
                    path: 'reset-password',
                    name: 'forgot-pw',
                    component: () => import('./views/auth/reset-password/ResetPassword.vue'),
                    meta: {
                        auth: false,
                        title: 'Password Recovery'
                    }
                },
                {
                    path: 'reset-password/:token',
                    name: 'reset-pw',
                    component: () => import('./views/auth/reset-password-form/ResetPasswordForm.vue'),
                    meta: {
                        auth: false,
                        title: 'Reset Password'
                    }
                },
                {
                    path: 'verify/:id/:expires/:signature',
                    name: 'email-verify',
                    component: () => import('./views/auth/verify-email/VerifyEmail.vue'),
                    meta: {
                        auth: false,
                        title: 'Verify Email'
                    }
                }
            ]
        },
        {
            path: '/',
            component: BlankTemplate,
            meta: {
                auth: undefined
            },
            children: [
                {
                    path: '*',
                    name: '404',
                    component: () => import('./views/error/not-found/NotFound.vue'),
                    meta: {
                        auth: undefined,
                        title: 'Error 404'
                    }
                }
            ]
        }
    ]
});
