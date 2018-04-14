<template>
    <v-dialog max-width="500px" v-model="logining">
        <v-card flat>
            <v-card-title primary-title>
                {{ login ? 'Login' : 'Register' }}
            </v-card-title>
            <v-container>
                <login v-if="login"></login>
                <register v-else></register>
                <v-btn block flat small @click="login = !login">
                    {{ !login ? 'Already have account? Login!' : 'New user? Register!' }}
                </v-btn>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
import Login from './LoginForm';
import Register from './RegisterForm';

export default {
    data() {
        return {
            login: true
        }
    },
    components: {
        Login,
        Register
    },
    computed: {
        logining: {
            get: function() {
                return this.$store.getters.isLogining;
            },
            set: function() {
                return this.$store.commit('toggleIsLogining');
            }
        }
    }
}
</script>

<style>

</style>
