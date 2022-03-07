<template>
    <div class="w-100 flex justify-center pt-5">
        <div class="form-container p-5">
            <h1 class="text-center text-2xl font-bold mb-4">Connectez-vous !</h1>
            <div class="mb-3">
                <label for="email">Adresse E-Mail :</label>
                <input type="email" v-model="email" class="form-input" id="email" placeholder="Adresse E-Mail">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <input type="password" v-model="password" class="form-input" id="password" placeholder="*******">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" v-model="rememberMe" class="mr-3" id="remember-me">
                <label for="remember-me" class="form-check-label">Se souvenir de moi</label>
            </div>
            <div class="flex justify-center">
                <button type="button" class="btn btn-primary" @click="login">
                    <loader v-if="loading"/>
                    <template v-else>
                        Se connecter
                    </template>
                </button>
            </div>
            <div class="d-flex" v-if="errorMessage">
                <div class="alert alert-danger">
                    {{ errorMessage }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from "../stores/auth";
import { useUserStore } from "../stores/user";
import router from "../router";
import Loader from "../components/Loader.vue";

export default {
    name: "LoginView",
    components: { Loader },
    data() {
        return {
            authStore: useAuthStore(),
            userStore: useUserStore(),
            email: '',
            password: '',
            rememberMe: false,
            errorMessage: '',
            loading: false,
        }
    },
    mounted() {
        if (this.authStore.isAuthenticated) {
            router.push({ name: 'dashboard' });
        }
    },
    methods: {
        login() {
            this.loading = true
            axios.post('/login', {
                email: this.email,
                password: this.password,
            })
                .then(result => {
                    this.authStore.setToken(result.data.token, this.rememberMe);
                    this.userStore.setUser(result.data.user)

                    this.$router.push({ name: 'dashboard' });
                })
                .finally(() => {
                    this.loading = false;
                })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
