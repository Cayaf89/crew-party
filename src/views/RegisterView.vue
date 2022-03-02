<template>
    <div class="container">
        <h1>Inscrivez-vous !</h1>
        <div class="mb-3">
            <label for="username" class="form-label">Nom d'utilisateur :</label>
            <input type="text" v-model="username" class="form-control" id="username" placeholder="Nom d'utilisateur">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Adresse E-Mail :</label>
            <input type="email" v-model="email" class="form-control" id="email" placeholder="Adresse E-Mail">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Mot de passe</label>
            <input type="password" v-model="password" class="form-control" id="password" placeholder="*******">
        </div>
        <div class="mb-3">
            <label for="confirm-password" class="form-label">Confirmer le mot de passe</label>
            <input type="password" v-model="confirmPassword" class="form-control" id="confirm-password"
                   placeholder="*******">
        </div>
    </div>
</template>

<script>
export default {
    name: "RegisterView",
    data() {
        return {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        register() {
            axios.post('/')
        }
    }
}
</script>

<style scoped>

</style>
