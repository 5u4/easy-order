<template>
    <v-toolbar id="nav" flat fixed height="64px">
        <v-container fluid>
            <v-layout>
                <!-- Logo -->
                <v-flex xs2 offset-xs5>
                    <logo :fontSize="2"></logo>
                </v-flex>
                <!-- User State -->
                <v-flex xs5>
                    <v-layout>
                        <!-- Shopping Cart -->
                        <v-flex xs4 offset-xs1>
                            <v-btn flat @click="showCart()" v-if="isLoggedIn || totalItems > 0">
                                <v-badge>
                                    <span slot="badge" v-if="totalItems > 0">
                                        {{ totalItems }}
                                    </span>
                                    <v-icon>shopping_cart</v-icon>
                                </v-badge>
                            </v-btn>
                        </v-flex>
                        <!-- User -->
                        <v-flex xs5 v-if="isLoggedIn">
                            <v-menu offset-y open-on-hover>
                                <v-btn flat slot="activator">
                                    <v-icon>person</v-icon>
                                    {{ currentUser ? currentUser.username : 'Unauthenticated' }}
                                </v-btn>
                                <v-list>
                                    <!-- Manage -->
                                    <v-list-tile v-if="isAdmin">
                                        Manage
                                    </v-list-tile>
                                    <!-- Logout -->
                                    <v-list-tile @click="logout()">
                                        Logout
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                        </v-flex>
                        <!-- Login/Register -->
                        <v-flex xs5 v-else>
                            <v-btn small flat @click="auth()">Login/Register</v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-toolbar>
</template>

<script>
import Logo from './Logo';

export default {
    components: {
        Logo
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        },
        currentUser() {
            return this.$store.getters.getCurrentUser;
        },
        totalItems() {
            return this.$store.getters.getCartItemCount;
        },
        isAdmin() {
            return this.$store.getters.isAdmin;
        }
    },
    methods: {
        auth() {
            this.$store.commit('toggleIsLogining');
        },
        logout() {
            this.$store.commit('logout');
        },
        showCart() {
            this.$store.commit('toggleCartShow');
        }
    }
}
</script>

<style>
#nav {
    background-color: transparent; 
}
</style>
