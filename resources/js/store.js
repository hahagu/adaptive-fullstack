import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
    key: 'vuex',
    storage: window.localStorage
})

export default new Vuex.Store({
    state: {
        authenticated: false
    },
    plugins: [vuexLocalStorage.plugin],
    mutations: {
        setAuth(state, status) {
            state.authenticated = status;
        }
    },
    actions: {}
});
