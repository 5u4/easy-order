<template>
    <v-dialog max-width="600px" v-model="showCart">
        <v-card flat>
            <v-card-title primary-title>
                Shopping Cart
            </v-card-title>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs4 v-for="item in cartItems" :key="item.id">
                        <v-card width="90%" flat height="45px">
                            <v-layout>
                                <v-flex xs3 offset-xs1>{{ item.name }}</v-flex>
                                <v-flex xs3>{{ item.quantity }}</v-flex>
                                <v-flex xs3>${{ (item.price * item.quantity).toFixed(2) }}</v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-flex>
                    Total Price: ${{ totalPrice }}
                </v-flex>
                <v-btn flat small block>Place Order</v-btn>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    computed: {
        showCart: {
            get: function() {
                return this.$store.getters.getShowCartModal;
            },
            set: function() {
                this.$store.commit('toggleCartShow');
            }
        },
        cartItems() {
            return this.$store.getters.getCartItems;
        },
        totalPrice() {
            return this.$store.getters.getTotalPrice;
        }
    }
}
</script>

<style>

</style>
