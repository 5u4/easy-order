<template>
    <v-container>
        <v-layout row wrap>
            <v-flex v-for="item in items" :key="item.id" xs3 @click="showDescription(item.id)">
                <item :item="item"></item>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { index } from '../../../VueResource/item';
import Item from './Item';

export default {
    data() {
        return {
            resource: {},
        }
    },
    created() {
        index().then(response => {
            this.$store.commit('setItems', response.data.data);
        }, error => {
            console.log(error); //TODO: Unhandled error
        });
    },
    computed: {
        items() {
            return this.$store.getters.getItems;
        }
    },
    components: {
        Item
    },
    methods: {
        showDescription(itemId) {
            this.$store.commit('toggleShowItemModal');
            this.$store.commit('showItemDescription', {itemId: itemId})
        }
    }
}
</script>

<style>

</style>
