import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './app.css'
import './assets/js/axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import { useAuthStore } from "./stores/auth";
import { useUserStore } from "./stores/user";

const localToken = localStorage.getItem('token');
const sessionToken = sessionStorage.getItem('token');
if (localToken || sessionToken) {
    useAuthStore().setToken(localToken ?? sessionToken)
}

const user = localStorage.getItem('user');
if (user) {
    useUserStore().setUser(JSON.parse(user))
}

app.mount('#app')
