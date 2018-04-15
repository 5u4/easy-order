const item = {
    state: {
        items: [],
        showItemModal: false,
        showingItemId: null
    },
    getters: {
        getItems(state) {
            return state.items;
        },
        showItemModal(state) {
            return state.showItemModal;
        },
        getShowingItemId(state) {
            return state.showingItemId;
        }
    },
    mutations: {
        /* payload: [{id, name, price}, ...] */
        setItems(state, payload) {
            state.items = payload;
        },
        toggleShowItemModal(state) {
            state.showItemModal = !state.showItemModal;
        },
        /* payload: {itemId} */
        showItemDescription(state, payload) {
            state.showingItemId = payload.itemId;
        },
        /* payload: [{id, name, price}, ...] */
        pushToItems(state, payload) {
            payload.forEach(item => {
                state.items.push(item);
            });
        }
    }
}

export default item;
