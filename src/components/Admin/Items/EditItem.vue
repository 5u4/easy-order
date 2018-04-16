<template>
    <v-dialog v-model="edit" max-width="600px">
        <v-card>
            <v-card-title>
                {{ item.name }}
            </v-card-title>
            <v-container>
                <v-layout column>
                    <v-flex>
                        <v-layout row wrap>
                            <v-flex style="margin-right: 10px">
                                <v-text-field label="name" v-model="name" @keyup.enter="editItem()"></v-text-field>
                            </v-flex>
                            <v-flex style="margin-right: 10px">
                                <v-text-field label="price" v-model="price" @keyup.enter="editItem()"></v-text-field>
                            </v-flex>
                            <v-flex style="margin-right: 10px">
                                <v-btn icon class="mx-0" @click="destroyItem()">
                                    <v-icon color="red">delete</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-spacer></v-spacer>
                    <v-flex>
                        <v-btn flat block color="success" @click="editItem()">
                            Save
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
import { edit, destroy } from '../../../VueResource/item';

export default {
    data() {
        return {
            name: this.$store.getters.getEditItem.name,
            price: this.$store.getters.getEditItem.price
        }
    },
    computed: {
        edit: {
            get: function() {
                return this.$store.getters.isEditingItem;
            },
            set: function() {
                this.$store.commit('toggleEditingItem');
            }
        },
        item() {
            return this.$store.getters.getEditItem;
        }
    },
    methods: {
        editItem() {
            let item = {};
            if (this.name != this.item.name) {
                item['name'] = this.name;
            }
            if (this.price != this.item.price) {
                item['price'] = this.price;
            }
            if (item) {
                edit(
                    this.item.id, 
                    item.name, 
                    item.price,
                    this.$store.getters.getAccessToken
                ).then(response => {
                    const index = this.$store.getters.getItems.map(item => item.id).indexOf(response.data.data.id);
                    this.$store.state.Item.items[index].name = response.data.data.name;
                    this.$store.state.Item.items[index].price = response.data.data.price;
                    this.$store.commit('toggleEditingItem');
                }, error => {
                    console.log(error); //TODO: handle Errors
                });
            }
        },
        destroyItem() {
            if (this.item) {
                destroy(this.item.id, this.$store.getters.getAccessToken).then(response => {
                    const index = this.$store.getters.getItems.map(item => item.id).indexOf(response.data.data.id);
                    this.$store.state.Item.items[index].deleted = true;
                    this.$store.commit('toggleEditingItem');
                }, error => {
                    console.log(error); //TODO: handle
                });
            }
        }
    }
}
</script>

<style>

</style>
