import Vue from 'vue';
import Vuex from 'vuex';

import User from './user';
import Item from './item';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        User,
        Item
    }
});

export default store;
