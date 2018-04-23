<template>
    <img :src="Logo" :height="size">
</template>

<script>
import Logo from '../../assets/logo.png';

export default {
    props: {
        size: Number
    },
    data() {
        return {
            Logo
        }
    }
}
</script>

<style>

</style>
