<template>
    <v-dialog v-model="isCreating" max-width="600px">
        <v-card>
            <v-card-title>
                Create Item
            </v-card-title>
            <v-container>
                <v-layout column>
                    <v-form lazy-validation v-model="valid" ref="form">
                        <!-- Name -->
                        <v-text-field 
                            label="name" 
                            v-model="name" 
                            :rules="nameRules" 
                            required 
                            @keyup.enter="create()">
                        </v-text-field>
                        <!-- Price -->
                        <v-text-field 
                            label="price" 
                            v-model="price" 
                            :rules="priceRules" 
                            required 
                            @keyup.enter="create()">
                        </v-text-field>
                    </v-form>
                    <v-spacer></v-spacer>
                    <v-flex>
                        <v-btn flat block color="success" @click="create()">
                            Create
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
import { create } from '../../../VueResource/item';

export default {
    data() {
        return {
            valid: false,
            name: null,
            price: null,
            nameRules: [
                v => !!v || 'Name is required',
            ],
            priceRules: [
                v => !!v || 'Price is required',
                v => (v && !isNaN(v) && isFinite(v)) || 'Price should be a number'
            ]
        }
    },
    computed: {
        isCreating: {
            get: function() {
                return this.$store.getters.isCreatingItem;
            },
            set: function() {
                this.$store.commit('toggleCreatingItem');
            }
        }
    },
    methods: {
        create() {
            if (this.valid) {
                create(
                    this.name, 
                    this.price,
                    this.$store.getters.getAccessToken
                ).then(response => {
                    this.name = null;
                    this.price = null;
                    this.$store.commit('pushToItems', [response.data.data]);
                    this.$store.commit('toggleCreatingItem');
                }, error => {
                    console.log(error); //TODO: handle Errors
                });
            }
        }
    }
}
</script>

<style>

</style>
