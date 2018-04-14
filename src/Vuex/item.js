const item = {
    state: {
        items: []
    },
    getters: {
        getItems(state) {
            return state.items;
        }
    },
    mutations: {
        /* payload: [{id, name, price}, ...] */
        setItems(state, payload) {
            state.items = payload;
        }
    }
}

export default item;
