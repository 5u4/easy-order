<template>
    <v-dialog max-width="700px" v-model="show" v-if="show">
        <v-card>
            <v-layout row>
                <!-- Picture -->
                <v-flex xs6>
                    <v-card-media height="500px" :src="Placeholder">
                    </v-card-media>
                </v-flex>
                <!-- Item -->
                <v-flex xs6>
                    <v-container fill-height>
                        <v-layout column wrap>
                            <!-- Name + Price -->
                            <v-flex xs2>
                                <v-card-text>
                                    <h2 class="text-xs-left pb-3">{{ item.name }}</h2>
                                    <p class="text-xs-left">${{ item.price }}</p>
                                </v-card-text>
                            </v-flex>
                            <!-- Description -->
                            <v-flex>
                                <v-card-text>
                                    <p class="text-xs-left">This item has no description yet</p>
                                </v-card-text>
                            </v-flex>
                            <!-- Add To Cart -->
                            <v-flex xs1 v-if="isLoggedIn">
                                <v-btn block flat @click="addToCart()">
                                    Add To Cart
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-card>
    </v-dialog>
</template>

<script>
import Placeholder from '../../../assets/placeholder.png';

export default {
    data() {
        return {
            Placeholder
        }
    },
    computed: {
        show: {
            get: function() {
                return this.$store.getters.showItemModal;
            },
            set: function() {
                this.$store.commit('toggleShowItemModal');
            }
        },
        item() {
            const id = this.$store.getters.getShowingItemId;
            const index = this.$store.getters.getItems.map(item => item.id).indexOf(id);
            return this.$store.getters.getItems[index];
        },
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        }
    },
    methods: {
        addToCart() {
            /* Get Indices */
            const cartIndex = this.$store.getters.getCartItems.map(item => item.id).findIndex(itemId => this.item.id == itemId);

            /* Exists in cart; update */
            if (cartIndex >= 0) {
                this.$store.commit('updateCartItemQuantity', {
                    quantity: 1,
                    item: this.$store.getters.getCartItems[cartIndex]
                });
            }

            /* Not exists; push */
            else {
                this.$store.commit('pushToCart', {
                    id: this.item.id, 
                    name: this.item.name,
                    price: this.item.price,
                    quantity: 1
                });
            }
        }
    }
}
</script>

<style>

</style>
