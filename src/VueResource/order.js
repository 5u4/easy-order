import Vue from 'vue';

/* URI */
const itemUri = 'api/v1/orders{/id}{/type}';

/**
 * Return all orders
 */
export const index = () => {
    return Vue.http.get(itemUri);
};

/**
 * Create an order
 * 
 * @param {Array} orders 
 * @param {String} accessToken 
 */
export const create = (orders, accessToken) => {
    let headers = {}
    if (accessToken) {
        headers['Authorization'] = 'Bearer ' + accessToken;
    }
    const body = {
        "orders": orders
    };
    const type = accessToken ? 'login' : 'guest';
    return Vue.http.post(itemUri, body, {params: {type: type}, headers: headers});
};
