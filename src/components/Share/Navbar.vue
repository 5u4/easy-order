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
                    <!-- User Name + Logout -->
                    <v-layout v-if="isLoggedIn">
                        <v-flex xs4>
                            <v-btn small flat disabled>
                                <v-icon>person</v-icon>
                                {{ currentUser ? currentUser.username : 'Unauthenticated' }}
                            </v-btn>
                        </v-flex>
                        <v-flex xs1>
                            <v-btn small flat @click="showCart()">
                                <v-icon>shopping_cart</v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex xs1 offset-xs2>
                            <v-btn small flat @click="logout()">Logout</v-btn>
                        </v-flex>
                    </v-layout>
                    <!-- Login + Register -->
                    <v-layout v-else>
                        <v-flex>
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
