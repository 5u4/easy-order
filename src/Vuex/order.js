const order = {
    state: {
        orders: [],
    },
    getters: {
        getOrders(state) {
            return state.items;
        }
    },
    mutations: {
        /* payload: [{id, name, price}, ...] */
        setOrder(state, payload) {
            state.items = payload;
        },
        /* payload: order */
        pushToOrders(state, payload) {
            state.orders.push(payload);
        }
    }
}

export default order;
