import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store';
import router from './router';

import { IonicVue } from '@ionic/vue';

import axios from 'axios'
import VueAxios from 'vue-axios'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.scss';
import './theme/variables-light.scss';

import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);

const api = axios.create({
    baseURL: `https://crew-party-api.test/api/`,
})
api.interceptors.response.use(
    response => {
        store.commit('setLoader', false)
        return response;
    },
    error => {
        store.commit('setLoader', false)
        if (error?.response?.status === 403) {
            localStorage.removeItem('access_token');
            store.commit('logout');
            router.push({ name: 'Home' });
        }
        return Promise.reject(error);
    }
);
api.interceptors.request.use(
    config => {
        config.headers = {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Accept': 'application/json',
        }
        store.commit('setLoader', true)
        return config;
    },
);

const app = createApp(App)
    .use(IonicVue)
    .use(store)
    .use(router)
    .use(VueAxios, api);

router.isReady().then(async () => {
    if (localStorage.getItem('access_token')) {
        api.get('user')
            .then(response => {
                const user = {
                    ...response.data.data,
                    isAuthenticated: true
                }
                store.commit('setUser', user);
            });
    }
    router.beforeEach(async (to) => {
        if (!store.state.user.isAuthenticated && to.name === 'settings') {
            return { name: 'login' }
        }
    })
    app.mount('#app');
});
