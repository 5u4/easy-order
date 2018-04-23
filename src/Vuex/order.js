const order = {
    state: {
        orders: [],
        showOrderModal: false
    },
    getters: {
        getOrders(state) {
            return state.orders;
        },
        showOrderModal(state) {
            return state.showOrderModal;
        }
    },
    mutations: {
        /* payload: [{id, name, price}, ...] */
        setOrder(state, payload) {
            state.orders = payload;
        },
        /* payload: order */
        pushToOrders(state, payload) {
            state.orders.push(payload);
        },
        toggleShowOrderModal(state) {
            state.showOrderModal = !state.showOrderModal;
        }
    }
}

export default order;
