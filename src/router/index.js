import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminView,
        meta: { requiresAdmin: true }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAdmin)) {
        // Add your admin authentication logic here
        const isAdmin = true // Replace with actual admin check
        if (!isAdmin) {
            next('/')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
