<template>
    <v-flex style="height: 100%; backgroundColor: #EFEBE9;">
        <v-container grid-list-md text-md-center>
            <v-layout column wrap>
                <v-flex style="margin-top: 25%; margin-bottom: 20%;">
                    <logo :fontSize="3"></logo>
                </v-flex>
                <v-flex>
                    <v-btn flat large to="/main">
                        Start
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script>
import Logo from '../Share/Logo';

export default {
    components: {
        Logo
    }
}
</script>

<style>

</style>
