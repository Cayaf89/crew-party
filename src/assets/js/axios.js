import axios from 'axios'
import { useRouter } from "vue-router";

window.axios = axios;

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';
window.axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    if (error.response && error.response.status == 401) {
        if (error.response.data.message == 'Unauthenticated.') {
            const router = useRouter()
            router.push({ name: 'login' });
        }
    }
    return Promise.reject(error);
});
