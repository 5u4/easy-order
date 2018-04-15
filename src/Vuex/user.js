const user = {
    state: {
        currentUser: null,
        logining: false,
        api_token: null
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
        },
        getCurrentUser(state) {
            return state.currentUser;
        },
        isAdmin(state) {
            if (state.currentUser) {
                return state.currentUser.is_admin;
            } else {
                return false;
            }
        },
        getAccessToken(state) {
            return state.api_token;
        }
    },
    mutations: {
        toggleIsLogining(state) {
            if (state.currentUser) {
                state.logining = false;
            } else {
                state.logining = !state.logining;
            }
        },
        /* payload: {data: {username, email, id, is_admin}, api_token} */
        login(state, payload) {
            if (!state.currentUser) {
                state.currentUser = payload.data;
                state.api_token = payload.api_token;
                state.logining = false;
            }
        },
        logout(state) {
            state.currentUser = null;
        }
    }
}

export default user;
