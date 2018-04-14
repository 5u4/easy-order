const dashboard = {
    state: {
        editing: false,
        item: null
    },
    getters: {
        isEditingItem(state) {
            return state.editing;
        },
        getEditItem(state) {
            return state.item;
        }
    },
    mutations: {
        toggleEditingItem(state) {
            state.editing = !state.editing;
        },
        /* payload: {item} */
        editItem(state, payload) {
            state.editing = true;
            state.item = payload.item;
        }
    }
}

export default dashboard;
