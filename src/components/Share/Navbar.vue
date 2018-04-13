<template>
    <v-toolbar id="nav" flat fixed height="64px">
        <v-container fluid>
            <v-layout>
                <!-- Logo -->
                <v-flex xs4 offset-xs4>
                    <logo :fontSize="2"></logo>
                </v-flex>
                <!-- User State -->
                <v-flex xs4>
                    <!-- User Name + Logout -->
                    <v-layout v-if="isLoggedIn">
                        <v-flex xs6>
                            <v-btn small flat disabled>
                                <v-icon>person</v-icon>
                                Username
                            </v-btn>
                        </v-flex>
                        <v-flex xs1>
                            <v-btn small flat>Logout</v-btn>
                        </v-flex>
                    </v-layout>
                    <!-- Login + Register -->
                    <v-layout v-else>
                        <v-flex>
                            <v-btn small flat>Login/Register</v-btn>
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
            return this.$store.state.User.isLoggedIn;
        }
    }
}
</script>

<style>
#nav {
    background-color: transparent; 
}
</style>
