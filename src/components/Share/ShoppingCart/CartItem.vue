<template>
    <v-card height="100px" flat hover disabled style="margin-bottom: 5px;">
        <v-container fill-height fluid>
            <v-layout row>
                <!-- Item Pic -->
                <v-flex xs4>
                    <v-card-media height="80px" :src="Placeholder"></v-card-media>
                </v-flex>
                <!-- Name + Quantity -->
                <v-flex xs4 class="pt-1">
                    <v-layout column>
                        <v-flex xs6>
                            {{ item.name }}
                        </v-flex>
                        <v-flex xs6>
                            <v-layout row>
                                <v-flex>
                                    <v-btn-toggle>
                                        <v-btn 
                                            xs1 small flat 
                                            :disabled="item.quantity <= 0"
                                            @click="updateCartQuantity(-1)">
                                            <v-icon>remove</v-icon>
                                        </v-btn>
                                        <v-btn xs1 small flat disabled>
                                            <span class="black--text">
                                                {{ item.quantity }}
                                            </span>
                                        </v-btn>
                                        <v-btn 
                                            xs1 small flat 
                                            @click="updateCartQuantity(1)">
                                            <v-icon>add</v-icon>
                                        </v-btn>
                                    </v-btn-toggle>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <!-- Price -->
                <v-flex xs4 class="pt-4">
                    ${{ (item.price * item.quantity).toFixed(2) }}
                </v-flex>
                <!-- Delete -->
                <v-flex xs1>
                    <v-btn-toggle class="pt-3">
                        <v-btn flat @click="removeItem()">
                            <v-icon>close</v-icon>
                        </v-btn>
                    </v-btn-toggle>
                </v-flex>
            </v-layout>
        </v-container>

    </v-card>
</template>

<script>
import Placeholder from '../../../assets/placeholder.png';

export default {
    props: {
        item: Object
    },
    data() {
        return {
            Placeholder
        }
    },
    methods: {
        updateCartQuantity(quantity) {
            this.$store.commit('updateCartItemQuantity', {
                quantity: quantity,
                item: this.item,//this.getCartItems[cartIndex],
            });
        },
        removeItem() {
            this.$store.commit('removeCartItem', {item: this.item});
        }
    }
}
</script>

<style>

</style>
