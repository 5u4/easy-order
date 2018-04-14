<template>
    <v-container>
        <v-layout row wrap>
            <v-flex v-for="item in items" :key="item.id" xs3>
                <item :item="item"></item>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Item from './Item';

export default {
    data() {
        return {
            resource: {},
        }
    },
    created() {
        const actions = {
            fetchItems: {method: 'GET'}
        };
        this.resource = this.$resource('api/v1/items', {}, actions);
    },
    mounted() {
        this.resource.fetchItems().then(response => {
            this.$store.commit('setItems', response.data.data);
        });
    },
    computed: {
        items() {
            return this.$store.getters.getItems;
        }
    },
    components: {
        Item
    }
}
</script>

<style>

</style>
