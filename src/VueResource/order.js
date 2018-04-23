import Vue from 'vue';

/* URI */
const orderUri = 'api/v1/orders{/id}{/type}';

/**
 * Return all orders
 */
export const index = () => {
    return Vue.http.get(orderUri);
};

/**
 * Create an order
 * 
 * @param {Array} orders 
 * @param {String} accessToken 
 */
export const create = (orders, accessToken) => {
    let headers = {};
    if (accessToken) {
        headers['Authorization'] = 'Bearer ' + accessToken;
    }
    const body = {
        "orders": orders
    };
    const type = accessToken ? 'login' : 'guest';
    return Vue.http.post(orderUri, body, {params: {type: type}, headers: headers});
};

/**
 * View one's order history
 * 
 * @param {String} accessToken 
 */
export const history = (accessToken) => {
    let headers = {
        "Authorization": 'Bearer ' + accessToken
    };
    return Vue.http.get(orderUri, {params: {type: 'history'}, headers: headers});
}
