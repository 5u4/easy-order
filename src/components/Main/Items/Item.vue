<template>
    <v-card flat color="transparent" height="200px" hover disabled width="90%" style="margin-bottom: 10%;">
        <v-card-media height="140px" :src="Placeholder">
        </v-card-media>
        <v-card-text>
            <v-layout column>
                <v-flex>
                    {{ item.name }}
                </v-flex>
                <v-flex>
                    ${{ item.price }}
                </v-flex>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
import Placeholder from '../../../assets/placeholder.png';

export default {
    props: {
        item: Object /* {id, name, price} */
    },
    data() {
        return {
            Placeholder
        }
    }
}
</script>

<style>

</style>
