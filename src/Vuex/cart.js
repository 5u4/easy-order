const cart = {
    state: {
        items: [
            {id: 1, name: 'apple', price: 2.52, quantity: 1},
            {id: 2, name: 'apple', price: 2.52, quantity: 2},
            {id: 3, name: 'apple', price: 2.52, quantity: 3},
            {id: 4, name: 'apple', price: 2.52, quantity: 4}
        ],
        show: false
    },
    getters: {
        getCartItems(state) {
            return state.items;
        },
        getCartItemCount(state) {
            if (!state.items) {
                return 0;
            }
            let sum = 0;
            state.items.forEach(item => {
                sum += item.quantity;
            });
            return sum;
        },
        getTotalPrice(state) {
            const totalPrices = state.items.map(item => item.price * item.quantity);
            if (totalPrices.length == 0) {
                return 0;
            } else {
                return totalPrices.reduce((a, b) => a + b).toFixed(2);
            }
        },
        getShowCartModal(state) {
            return state.show;
        }
    },
    mutations: {
        /* payload: {id, name, price, quantity} */
        pushToCart(state, payload) {
            state.items.push({
                id: payload.id,
                name: payload.name,
                price: payload.price,
                quantity: payload.quantity
            });
        },
        /* payload: {item: cartItem} */
        removeCartItem(state, payload) {
            const index = state.items.indexOf(payload.item);
            if (index > -1) {
                state.items.splice(index, 1);
            }
        },
        /* payload: {quantity: Number, item: cartItem} */
        updateCartItemQuantity(state, payload) {
            if (payload.item.quantity + payload.quantity <= 0) {
                payload.item.quantity = 0;
            } else {
                payload.item.quantity += payload.quantity;
            }
        },
        toggleCartShow(state) {
            state.show = !state.show;
        }
    }
}

export default cart;
