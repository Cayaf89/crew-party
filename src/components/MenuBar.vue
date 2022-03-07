<template>
    <nav class="navbar">
        <div class="container mx-auto flex flex-row justify-between h-full">
            <div class="flex">
                <router-link :to="{ 'name': authStore.isAuthenticated ? 'dashboard' : 'home' }"
                             class="mr-8 h-full flex justify-center">
                    <img src="../assets/images/logo/teaching-tomster.png" class="h-14 my-auto">
                </router-link>
                <router-link :to="{ 'name': 'dashboard' }"
                             class="nav-link" v-if="authStore.isAuthenticated">
                    <div>Dashboard</div>
                </router-link>
            </div>

            <div class="flex" v-if="!authStore.isAuthenticated">
                <div class="flex items-center">
                    <router-link :to="{ 'name': 'login' }" class="btn">
                        Se connecter
                    </router-link>
                </div>
                <div class="flex items-center">
                    <router-link :to="{ 'name': 'register' }" class="btn btn-primary mx-3">
                        S'inscrire
                    </router-link>
                </div>
            </div>

            <div class="flex" v-else>
                <div class="dropdown">
                    <a href="#" class="nav-link">
                        <div>Mon profil</div>
                    </a>
                    <div class="dropdown-menu">
                        <div>
                            <router-link :to="{ 'name': 'profile' }" class="dropdown-item">
                                Modifier mon profil
                            </router-link>
                        </div>
                        <div>
                            <a href="#" class="dropdown-item text-red-400" @click="logout">
                                Se déconnecter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from "vue-router";
import { useAuthStore } from "../stores/auth";

export default {
    name: "MenuBar",
    components: {
        RouterLink
    },
    data() {
        return {
            authStore: useAuthStore()
        }
    },
    methods: {
        logout() {
            axios.post('/logout')
                .then(() => {
                    this.authStore.removeToken();
                    this.$router.push({ name: 'home' })
                })
        }
    }
}
</script>

<style scoped>
</style>
