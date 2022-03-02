import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import './app.scss'
import './assets/js/global'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
