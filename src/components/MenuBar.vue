<script>
import { RouterLink } from "vue-router";

export default {
    name: "MenuBar",
    components: {
        RouterLink
    }
}
</script>

<template>
    <nav class="navbar navbar-light bg-light mb-5">
        <div class="container container-fluid">
            <img src="../assets/images/logo/teaching-tomster.png" width="50">

            <div class="d-flex">
                <router-link to="login" class="btn btn-outline-primary me-3">Se connecter</router-link>
                <router-link to="register" class="btn btn-primary">S'inscrire</router-link>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>
