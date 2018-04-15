import Vue from 'vue';

/* URI */
const itemUri = 'api/v1/items{/id}{/type}';

/**
 * Return all items
 */
export const index = () => {
    return Vue.http.get(itemUri);
};

/**
 * Return all deleted items
 * 
 * @param {String} accessToken 
 */
export const deletedIndex = (accessToken) => {
    const headers = {'Authorization': 'Bearer ' + accessToken};
    return Vue.http.get(itemUri, {params: {type: 'deleted'}, headers: headers});
};

/**
 * Create an item with name and price
 * 
 * @param {String} name 
 * @param {Number} price 
 * @param {String} accessToken 
 */
export const create = (name, price, accessToken) => {
    const headers = {'Authorization': 'Bearer ' + accessToken};
    const body = {name: name, price: price};
    return Vue.http.post(itemUri, body, {headers: headers});
};

/**
 * Soft delete an item
 * 
 * @param {Number} itemId 
 * @param {String} accessToken 
 */
export const destroy = (itemId, accessToken) => {
    const headers = {'Authorization': 'Bearer ' + accessToken};
    return Vue.http.delete(itemUri, {params: {id: itemId}, headers: headers});
};

/**
 * Edit an item's name or price
 * 
 * @param {Number} itemId 
 * @param {String} name 
 * @param {Number} price 
 * @param {String} accessToken 
 */
export const edit = (itemId, name, price, accessToken) => {
    const headers = {'Authorization': 'Bearer ' + accessToken};
    let body = {};
    if (name) {
        body['name'] = name;
    }
    if (price) {
        body['price'] = price;
    }
    return Vue.http.put(itemUri, body, {params: {id: itemId}, headers: headers});
};
