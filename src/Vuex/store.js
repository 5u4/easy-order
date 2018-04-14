import Vue from 'vue';
import Vuex from 'vuex';

import User from './user';
import Item from './item';
import Cart from './cart';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        User,
        Item,
        Cart
    }
});

export default store;
