import Vue from 'vue';

/* URI */
const itemUri = 'api/v1/items{/id}';

export const index = () => {
    return Vue.http.get(itemUri);
};

/**
 * Edit an item's name or price
 * 
 * @param {Number} itemId 
 * @param {String} accessToken 
 * @param {String} name 
 * @param {Number} price 
 */
export const edit = (itemId, accessToken, name, price) => {
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
