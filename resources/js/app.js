/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import 'es6-promise/auto'
import VueAnime from 'vue-animejs';
import 'bootstrap';

import axios from 'axios';
import Vue from 'vue';
import VueAuth from '@websanova/vue-auth';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import Vuelidate from 'vuelidate';
import auth from './auth';
import router from './router';
import store from './store';
import mixin from './mixin';
import App from './App.vue';
Vue.config.devtools = true;
Vue.config.productionTip = false;

Vue.use(VueAnime);

Vue.use(VueMeta);
Vue.use(Vuelidate);
Vue.mixin(mixin);

Vue.router = router;
Vue.use(VueRouter);

Vue.use(VueAxios, axios);
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`;
Vue.use(VueAuth, auth);

const vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#wrapper');