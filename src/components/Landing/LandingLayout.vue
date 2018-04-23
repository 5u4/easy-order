<template>
    <v-flex style="height: 100%; backgroundColor: #EFEBE9;">
        <v-container grid-list-md text-md-center>
            <v-layout column wrap>
                <v-flex style="margin-top: 20%; margin-bottom: 4%;">
                    <logo :size="125"></logo>
                </v-flex>
                <v-flex style="margin-bottom: 21%">
                    <span class="grey--text text-xs-center">
                        An easy content management tool
                    </span>
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

<style scoped>
span {
    font-family: 'Sacramento', cursive;
    font-size: 1.75em;
}
</style>
