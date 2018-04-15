import Vue from 'vue';

/* URI */
const userUri = 'api/v1/users{/id}{/action}';

/**
 * Login using username/email and password
 * 
 * @param {String} username 
 * @param {String} email 
 * @param {String} password 
 */
export const login = (username, email, password) => {
    let credentials = {password: password};
    if (username) {
        credentials['username'] = username;
    }
    if (email) {
        credentials['email'] = email;
    }
    return Vue.http.post(userUri, credentials, {params: {action: 'login'}});
};

/**
 * Register a user
 * 
 * @param {String} username 
 * @param {String} email 
 * @param {String} password 
 * @param {String} passwordConfirmation 
 */
export const register = (username, email, password, passwordConfirmation) => {
    const credentials = {
        username: username,
        email: email, 
        password: password,
        password_confirmation: passwordConfirmation
    }
    return Vue.http.post(userUri, credentials, {params: {action: 'register'}});
};
