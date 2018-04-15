<template>
    <v-form lazy-validation v-model="valid" ref="form">
        <v-alert type="error" dismissible v-model="showMessage">
            {{responseText}}
        </v-alert>
        <!-- Username -->
        <v-text-field 
            label="username"
            v-model="username"
            :rules="usernameRules"
            required>
        </v-text-field>
        <!-- Email -->
        <v-text-field 
            label="email"
            v-model="email"
            :rules="emailRules"
            required>
        </v-text-field>
        <!-- Password -->
        <v-text-field 
            label="password"
            v-model="password"
            :rules="passwordRules"
            type="password"
            required>
        </v-text-field>
        <!-- Password Confirmation -->
        <v-text-field 
            label="password confirmation"
            v-model="passwordConfirmation"
            :rules="passwordConfirmationRules"
            type="password"
            required>
        </v-text-field>
        <!-- Register -->
        <v-btn flat block color="success" :disabled="!valid" @click="register()">
            Register
        </v-btn>
    </v-form>
</template>

<script>
import { register } from '../../../VueResource/user';

export default {
    data() {
        return {
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
            passwordConfirmation: '',
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 8) || 'Password at least 8 characters'
            ],
            passwordConfirmationRules: [
                v => !!v || 'Password confirmation is required',
                v => (v && v == this.password) || 'Password confirmation does not match password'
            ],
            responseText: '',
            showMessage: false
        }
    },
    methods: {
        register() {
            register(
                this.username,
                this.email,
                this.password,
                this.passwordConfirmation
            ).then(response => { /* User Created */
                this.$store.commit('login', response.data);
            }, error => { /* Errors */
                this.responseText = '';
                const errorMessages = error.body.error.message;
                for (let key in errorMessages) {
                    this.responseText += errorMessages[key] + " ";
                }
                this.showMessage = true;
            });
        }
    }
}
</script>

<style>

</style>
