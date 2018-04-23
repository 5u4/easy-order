<template>
    <v-card class="my-1">
        <v-layout row>
            <v-flex>
                <v-layout column>
                    <v-flex v-for="order in item.items" :key="order.item_id">
                        <v-card-text>
                            {{ getItemName(order.item_id) }}
                            ×{{ order.quantity }}
                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex>
                <v-card-text>
                    {{ item.status }}
                </v-card-text>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    props: {
        item: Object
    },
    methods: {
        getItemName(itemId) {
            return this.$store.getters.getItems.find(item => item.id == itemId)['name'];
        }
    }
}
</script>

<style>

</style>
