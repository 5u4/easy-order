<template>
    <div id="app">
        <v-app>
            <navbar v-if="currentRoute != 'landing'"></navbar>
            <router-view/>
        </v-app>
    </div>
</template>

<script>
import Navbar from './components/Share/Navbar';

export default {
    name: 'App',
    components: {
        Navbar
    },
    computed: {
        currentRoute() {
            return this.$route.name;
        }
    }
}
</script>

<style>
#app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
