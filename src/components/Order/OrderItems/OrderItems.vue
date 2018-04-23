<template>
    <v-container>
        <v-layout column>
            <v-flex v-for="order in orderItems" :key="order.id">
                <order-item :item="order"></order-item>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { history } from '../../../VueResource/order';
import OrderItem from './OrderItem';

export default {
    computed: {
        orderItems() {
            return this.$store.getters.getOrders;
        }
    },
    components: {
        OrderItem
    },
    created() {
        history(this.$store.getters.getAccessToken).then(response => {
            this.$store.commit('setOrder', response.data.data);
        }, error => {
            console.log(error); //TODO: Error Response
        });
    }
}
</script>

<style>

</style>
