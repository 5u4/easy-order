import Vue from 'vue'
import Router from 'vue-router';
import Landing from '../components/Landing/LandingLayout.vue';
import Main from '../components/Main/MainLayout.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Landing
        },
        {
            path: '/main',
            component: Main
        }
    ]
})
