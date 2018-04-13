const user = {
    state: {
        currentUser: null,
    },
    getters: {
        isLoggedIn(state) {
            if (currentUser) {
                return true;
            } else {
                return false;
            }
        }
    }
}
