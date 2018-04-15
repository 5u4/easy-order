<template>
    <v-form lazy-validation v-model="valid" ref="form">
        <v-alert type="error" dismissible v-model="showMessage">
            {{responseText}}
        </v-alert>
        <!-- Username/Email -->
        <v-layout row>
            <v-flex xs10>
                <v-text-field 
                    v-if="usingUsername" 
                    v-model="username" 
                    :rules="usernameRules"
                    label="username" 
                    required>
                </v-text-field>
                <v-text-field 
                    v-else label="email" 
                    v-model="email" 
                    :rules="emailRules"
                    autofocus 
                    required>
                </v-text-field>
            </v-flex>
            <v-flex class="py-2">
                <v-btn flat small @click="toggleLoginMethod()">
                    Use {{ usingUsername ? 'Email' : 'Username' }}
                </v-btn>
            </v-flex>
        </v-layout>
        <!-- Password -->
        <v-text-field 
            label="password" 
            v-model="password" 
            :rules="passwordRules" 
            required 
            type="password"
            @keyup.enter="login()">
        </v-text-field>
        <!-- Login -->
        <v-btn flat block color="success" :disabled="!valid" @click="login()">Login</v-btn>
    </v-form>
</template>

<script>
import { login } from '../../../VueResource/user';

export default {
    data() {
        return {
            usingUsername: true,
            valid: false,
            username: '',
            usernameRules: [
                v => !!v || 'Username is required',
            ],
            email: '',
            emailRules: [
                v => !!v || 'Email is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Invalid Email'
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 8) || 'Password should be longer than 8 characters'
            ],
            responseText: '',
            showMessage: false
        }
    },
    methods: {
        toggleLoginMethod() {
            this.usingUsername = !this.usingUsername;
        },
        login() {
            let request = {'password': this.password};

            if (this.usingUsername) {
                request['username'] = this.username;
            } else {
                request['email'] = this.email;
            }

            login(request.username, request.email, request.password).then(response => { /* Logged in successfully */
                this.$store.commit('login', response.data);
            }, error => {
                this.responseText = error.body.error.message;
                this.showMessage = true;
            });
        }
    }
}
</script>

<style>

</style>
