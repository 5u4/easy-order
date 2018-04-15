const dashboard = {
    state: {
        editing: false,
        creating: false,
        item: null
    },
    getters: {
        isEditingItem(state) {
            return state.editing;
        },
        getEditItem(state) {
            return state.item;
        },
        isCreatingItem(state) {
            return state.creating;
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
        },
        toggleCreatingItem(state) {
            state.creating = !state.creating;
        }
    }
}

export default dashboard;
