<template>
    <v-flex style="height: 100%; backgroundColor: #EFEBE9;">
        <navbar></navbar>
        <v-container id="scrolling" style="position: relative; top: 96px;">
        </v-container>
        <auth></auth>
    </v-flex>
</template>

<script>
import Navbar from '../Share/Navbar';
import Auth from '../Share/Auth/AuthLayout';

export default {
    components: {
        Navbar,
        Auth
    }
}
</script>

<style>

</style>
