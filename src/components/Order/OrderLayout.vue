<template>
    <v-dialog max-width="700px" v-model="show" v-if="show">
        <v-card>
            <v-layout column>
                <!-- Title -->
                <v-flex>
                    <v-card-text>
                        Orders
                    </v-card-text>
                </v-flex>
                <!-- Items -->
                <v-flex>
                    <order-items></order-items>
                </v-flex>
            </v-layout>
        </v-card>
    </v-dialog>
</template>

<script>
import OrderItems from './OrderItems/OrderItems';

export default {
    computed: {
        show: {
            get: function () {
                return this.$store.getters.showOrderModal;
            },
            set : function () {
                this.$store.commit('toggleShowOrderModal');
            }
        }
    },
    components: {
        OrderItems
    }
}
</script>

<style>

</style>
