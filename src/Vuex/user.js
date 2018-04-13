const user = {
    state: {
        currentUser: null,
        logining: false
    },
    getters: {
        isLoggedIn(state) {
            if (state.currentUser) {
                return true;
            } else {
                return false;
            }
        },
        isLogining(state) {
            return state.logining;
        }
    },
    mutations: {
        toggleIsLogining(state) {
            state.logining = !state.logining;
        }
    }
}

export default user;
