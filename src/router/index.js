import Vue from 'vue'
import Router from 'vue-router';
import Landing from '../components/Landing/LandingLayout.vue';
import Main from '../components/Main/MainLayout.vue';
import Dashboard from '../components/Admin/AdminLayout.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'landing',
            component: Landing
        },
        {
            path: '/main',
            name: 'main',
            component: Main
        },
        {
            path: '/dashboard',
            name: '/dashboard',
            component: Dashboard
        }
    ]
})
