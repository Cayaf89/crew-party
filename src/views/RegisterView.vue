<template>
    <div class="w-100 flex justify-center pt-5">
        <div class="form-container p-5">
            <h1 class="text-center text-2xl font-bold mb-4">Inscrivez-vous !</h1>
            <div class="mb-3">
                <label for="username">Nom d'utilisateur :</label>
                <input type="text" v-model="username" placeholder="Nom d'utilisateur" autocomplete="username"
                       id="username" class="form-input" :class="{'invalid': errors.username.length > 0}">
                <div class="invalid-feedback" v-if="errors.username.length > 0">
                    <div class="d-flex" v-for="errorUsername in errors.username">
                        {{ errorUsername }}
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="email">Adresse E-Mail :</label>
                <input type="email" v-model="email" class="form-input" id="email" placeholder="Adresse E-Mail"
                       autocomplete="email" :class="{'invalid': errors.email.length > 0}">
                <div class="invalid-feedback" v-if="errors.email.length > 0">
                    <div class="d-flex" v-for="errorEmail in errors.email">
                        {{ errorEmail }}
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="password">Mot de passe</label>
                <input type="password" v-model="password" class="form-input" id="password" placeholder="*******"
                       :class="{'invalid': errors.password.length > 0}">
                <div class="invalid-feedback" v-if="errors.password.length > 0">
                    <div class="d-flex" v-for="errorPassword in errors.password">
                        {{ errorPassword }}
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="confirm-password">Confirmer le mot de passe</label>
                <input type="password" v-model="confirmPassword" class="form-input" id="confirm-password"
                       placeholder="*******">
            </div>
            <div class="flex justify-center">
                <button type="button" class="btn btn-primary" @click="register">
                    <loader v-if="loading"/>
                    <template v-else>
                        S'inscrire
                    </template>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from "../stores/auth";
import { useUserStore } from "../stores/user";
import Loader from "../components/Loader.vue";

export default {
    name: "RegisterView",
    components: {
        Loader
    },
    data() {
        return {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {
                username: [],
                email: [],
                password: [],
            },
            loading: false,
        }
    },
    methods: {
        register() {
            this.loading = true;
            axios.post('/register', {
                username: this.username,
                email: this.email,
                password: this.password,
                password_confirmation: this.confirmPassword
            })
                .then(result => {
                    this.errors = {
                        username: [],
                        email: [],
                        password: [],
                    }
                    const authStore = useAuthStore();
                    authStore.setToken(result.data.token);

                    const userStore = useUserStore();
                    userStore.setUser(result.data.user)

                    this.$router.push('dashboard');
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                })
                .finally(() => {
                    this.loading = false;
                })
        }
    },
    watch: {
        username() {
            if (this.errors.username.length > 0) {
                this.errors.username = [];
            }
        },
        email() {
            if (this.errors.email.length > 0) {
                this.errors.email = [];
            }
        },
        password() {
            if (this.errors.password.length > 0) {
                this.errors.password = [];
            }
        },
    }
}
</script>

<style scoped>

</style>
