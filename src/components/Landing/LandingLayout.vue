<template>
    <v-jumbotron style="height: 100%; backgroundColor: #EFEBE9;">
        <v-container grid-list-md text-md-center>
            <v-layout column wrap>
                <v-flex style="margin-top: 25%; margin-bottom: 20%;">
                    <logo></logo>
                </v-flex>
                <v-flex>
                    <v-btn flat large>
                        Start
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-jumbotron>
</template>

<script>
import logo from '../Share/Logo';

export default {
    components: {
        logo
    }
}
</script>

<style>

</style>
