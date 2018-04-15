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
                                <v-text-field label="name" v-model="name"></v-text-field>
                            </v-flex>
                            <v-flex style="margin-right: 10px">
                                <v-text-field label="price" v-model="price"></v-text-field>
                            </v-flex>
                            <v-flex style="margin-right: 10px">
                                <v-btn icon class="mx-0">
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
export default {
    data() {
        return {
            name: this.$store.getters.getEditItem.name,
            price: this.$store.getters.getEditItem.price
        }
    },
    created() {
        this.resource = this.$resource(
            'api/v1/items/{id}', 
            {}, {
                edit: {method: 'PUT', url: 'api/v1/items/{id}', headers: {
                    'Authorization': 'Bearer ' + this.$store.getters.getAccessToken
                }}
            });
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
                this.resource.edit({id: this.item.id}, item).then(response => {
                    console.log(response);
                }, error => {
                    console.log(error);
                });
            }
        }
    }
}
</script>

<style>

</style>
