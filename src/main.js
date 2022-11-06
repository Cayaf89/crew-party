import { createApp } from 'vue'
import App from './App.vue'
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

import store from '@/store';

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);

const api = axios.create({
    baseURL: process.env.VUE_APP_PUBLIC_BACKEND_URL,
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
    }
})
api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 403) {
            router.push('/');
        }
        return Promise.reject(error);
    }
);

const app = createApp(App)
    .use(IonicVue)
    .use(store)
    .use(router)
    .use(VueAxios, api);

router.isReady().then(() => {
    app.mount('#app');
});
