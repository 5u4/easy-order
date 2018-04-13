// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import store from './Vuex/store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'babel-polyfill'

Vue.use(Vuetify);

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:8000';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
