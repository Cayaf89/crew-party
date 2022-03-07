import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: '',
        isAuthenticated: false,
    }),
    getters: {},
    actions: {
        setToken(token, rememberMe) {
            this.token = token;
            sessionStorage.setItem('token', token)
            if (rememberMe) {
                localStorage.setItem('token', token);
            }
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            this.isAuthenticated = true;
        },
        removeToken() {
            this.token = '';
            localStorage.removeItem('token')
            sessionStorage.removeItem('token')
            delete axios.defaults.headers.common.Authorization;
            this.isAuthenticated = false;
        }
    }
})
