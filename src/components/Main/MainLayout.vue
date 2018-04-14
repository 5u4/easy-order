<template>
    <v-flex style="height: 100%; backgroundColor: #EFEBE9;">
        <navbar></navbar>
        <v-container style="height: 96px;"></v-container>
        <v-container>
            <items></items>
        </v-container>
        <auth v-if="logining"></auth>
    </v-flex>
</template>

<script>
import Navbar from '../Share/Navbar';
import Items from './Items/Items';
import Auth from '../Share/Auth/AuthLayout';

export default {
    components: {
        Navbar,
        Items,
        Auth
    },
    computed: {
        logining() {
            return this.$store.getters.isLogining;
        }
    }
}
</script>

<style>

</style>
