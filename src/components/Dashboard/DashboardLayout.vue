<template>
    <v-flex style="height: 100%; backgroundColor: #EFEBE9;">
        <v-container style="height: 96px;"></v-container>
        <v-container>
            <v-layout v-if="isAdmin">
                <!-- Item Card -->
                <v-flex>
                    <item-card></item-card>
                </v-flex>
            </v-layout>
            <v-layout v-else>
                <v-flex>
                    <v-alert type="error" :value="true" outline>
                        You don't have permission to view this page
                    </v-alert>
                </v-flex>
            </v-layout>
        </v-container>
        <auth></auth>
        <create-modal v-if="isCreating"></create-modal>
        <edit-modal v-if="isEditing"></edit-modal>
    </v-flex>
</template>

<script>
import Auth from '../Share/Auth/AuthLayout';
import ItemCard from './Items/ItemLayout';
import CreateModal from './Items/CreateItem';
import EditModal from './Items/EditItem';

export default {
    computed: {
        isAdmin() {
            return this.$store.getters.isAdmin;
        },
        isEditing() {
            return this.$store.getters.isEditingItem;
        },
        isCreating() {
            return this.$store.getters.isCreatingItem;
        }
    },
    components: {
        ItemCard,
        Auth,
        CreateModal,
        EditModal
    }
}
</script>

<style>

</style>
