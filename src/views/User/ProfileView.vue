<template>
    <div class="w-100 flex justify-center pt-5">
        <div class="form-container p-5">
            <h1 class="text-center text-2xl font-bold mb-4">Modifiez votre profil</h1>
            <div class="columns-2">
                <div class="w-full mb-3">
                    <label for="firstname">Prénom :</label>
                    <input type="text" v-model="firstname" placeholder="Prénom" autocomplete="firstname"
                           id="firstname" class="form-input">
                </div>
                <div class="w-full mb-3">
                    <label for="lastname">Nom :</label>
                    <input type="text" v-model="lastname" placeholder="Nom" autocomplete="lastname"
                           id="lastname" class="form-input">
                </div>
            </div>
            <div class="mb-3">
                <label for="username">Nom d'utilisateur :</label>
                <input type="text" v-model="username" placeholder="Nom d'utilisateur" autocomplete="username"
                       id="username" class="form-input" :class="{'is-invalid': errors.username.length > 0}">
                <div class="invalid-feedback" v-if="errors.username.length > 0">
                    <div class="d-flex" v-for="errorUsername in errors.username">
                        {{ errorUsername }}
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="email">Adresse E-Mail :</label>
                <input type="email" v-model="email" class="form-input" id="email" placeholder="Adresse E-Mail">
                <div class="invalid-feedback" v-if="errors.email.length > 0">
                    <div class="d-flex" v-for="errorEmail in errors.email">
                        {{ errorEmail }}
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <button type="button" class="btn btn-primary flex" @click="save">
                    <loader class="self-center" v-if="saving" />
                    <template v-else>
                        Enregistrer
                    </template>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from "../../stores/user";
import axios from "axios";
import Loader from "../../components/Loader.vue";

export default {
    name: "ProfileView",
    components: { Loader },
    data() {
        return {
            userStore: useUserStore(),
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            errors: {
                username: [],
                email: [],
            },
            saving: false
        }
    },
    mounted() {
        this.firstname = this.userStore.firstname;
        this.lastname = this.userStore.lastname;
        this.username = this.userStore.username;
        this.email = this.userStore.email;
    },
    methods: {
        save() {
            this.saving = true;
            axios.post('/api/user', {
                firstname: this.firstname,
                lastname: this.lastname,
                username: this.username,
                email: this.email
            })
                .then(result => {
                    this.userStore.setUser(result.data.user)
                })
                .catch(error => {
                    this.errors = {...this.errors, ...error.response.data.errors};
                })
                .finally(() => {
                    this.saving = false;
                })
        }
    }
}
</script>

<style scoped>

</style>
