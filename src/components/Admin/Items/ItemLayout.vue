<template>
    <v-card>
        <v-card-title>
            Items
            <v-spacer></v-spacer>
            <v-text-field
                append-icon="search"
                label="Search"
                single-line
                hide-details
                v-model="search">
            </v-text-field>
        </v-card-title>
        <v-btn flat block small color="primary" @click="createItem()">
            Create Item
        </v-btn>
        <v-data-table 
            :headers="headers" 
            :items="items" 
            :search="search"
            :rows-per-page-items="[10,50,{'text':'All','value':-1}]">
            <template slot="items" slot-scope="item">
                <td class="text-xs-left">{{ item.item.id }}</td>
                <td class="text-xs-right">{{ item.item.name }}</td>
                <td class="text-xs-right">{{ item.item.price }}</td>
                <v-btn flat small @click="editItem(item.item)">
                    Edit
                    <v-icon small>mode_edit</v-icon>
                </v-btn>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import { index, deletedIndex } from '../../../VueResource/item';

export default {
    data() {
        return {
            search: ''
        }
    },
    created() {
        index().then(response => {
            this.$store.commit('setItems', response.data.data);
        }, error => {
            console.log(error); //TODO: Unhandled error
        });

        deletedIndex(this.$store.getters.getAccessToken).then(response => {
            this.$store.commit('pushToItems', response.data.data);
        }, error => {
            console.log(error);
        });
    },
    computed: {
        headers() {
            return [
                { text: 'ID', align: 'left', sortable: false, value: 'id' },
                { text: 'Name', value: 'name' },
                { text: 'Price', value: 'price' },
                { text: 'Edit', align: 'center', value: 'edit', sortable: false }
            ];
        },
        items() {
            return this.$store.getters.getItems;
        }
    },
    methods: {
        editItem(item) {
            const index = this.items.indexOf(item);
            this.$store.commit('editItem', {
                item: this.$store.getters.getItems[index]
            });
        },
        createItem() {
            this.$store.commit('toggleCreatingItem');
        }
    }
}
</script>

<style>

</style>
