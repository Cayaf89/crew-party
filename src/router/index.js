import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/TabHomePage.vue')
            },
            {
                path: 'calendar',
                name: 'calendar',
                component: () => import('@/views/TabCalendarPage.vue')
            },
            {
                path: 'contact',
                name: 'contact',
                component: () => import('@/views/TabContactPage.vue')
            },
            {
                path: 'settings',
                name: 'settings',
                component: () => import('@/views/TabSettingsPage.vue')
            },
            {
                path: 'login',
                name: 'login',
                component: () => import('@/views/LoginPage.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
