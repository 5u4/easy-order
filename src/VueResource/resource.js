import Vue from 'vue';
import VueResource from 'vue-resource';

import './user';
import './item';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:8000';
