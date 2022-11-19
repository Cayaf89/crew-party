<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <h1 class="text-xl text-primary text-center font-bold">Vous avez déjà un compte ?</h1>
            <ion-item class="w-full my-4 rounded-t-xl shadow-md">
                <ion-label position="stacked">Email</ion-label>
                <ion-input autocomplete="email" type="email" v-model="loginEmail"></ion-input>
            </ion-item>
            <ion-item class="w-full my-4 rounded-t-xl shadow-md">
                <ion-label position="stacked">Mot de passe</ion-label>
                <ion-input type="password" v-model="loginPassword"></ion-input>
            </ion-item>
            <ion-item class="w-full my-4" color="transparent" lines="none">
                <ion-checkbox slot="start" v-model="rememberMe"></ion-checkbox>
                <ion-label>Se souvenir de moi ?</ion-label>
            </ion-item>
            <div class="w-full flex justify-center">
                <ion-button :strong="true" shape="round" @click="login">Se connecter</ion-button>
            </div>

            <divider title="OU"/>

            <h1 class="text-xl text-primary font-bold text-center">S'inscrire</h1>
            <ion-item class="w-full my-4 rounded-t-xl shadow-md">
                <ion-label position="stacked">Pseudo</ion-label>
                <ion-input autocomplete="nickname" type="text" v-model="registerNickname"></ion-input>
            </ion-item>
            <ion-item class="w-full my-4 rounded-t-xl shadow-md">
                <ion-label position="stacked">Email</ion-label>
                <ion-input autocomplete="email" type="email" v-model="registerEmail"></ion-input>
            </ion-item>
            <ion-item class="w-full my-4 rounded-t-xl shadow-md">
                <ion-label position="stacked">Mot de passe</ion-label>
                <ion-input type="password" v-model="registerPassword"></ion-input>
            </ion-item>
            <ion-item class="w-full my-4 rounded-t-xl shadow-md">
                <ion-label position="stacked">Confirmation du mot de passe</ion-label>
                <ion-input type="password" v-model="registerPasswordConfirm"></ion-input>
            </ion-item>
            <div class="w-full flex justify-center">
                <ion-button shape="round" @click="register">S'inscrire</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonButton, IonCheckbox } from '@ionic/vue';
import Divider from "@/components/DividerComponent";
import { useRouter } from "vue-router";

export default defineComponent({
    name: 'LoginPage',
    components: { Divider, IonContent, IonPage, IonItem, IonLabel, IonInput, IonButton, IonCheckbox },
    data() {
        return {
            loginEmail: '',
            loginPassword: '',
            rememberMe: false,
            registerNickname: '',
            registerEmail: '',
            registerPassword: '',
            registerPasswordConfirm: '',
        }
    },
    setup() {
        const router = useRouter();
        return { router };
    },
    methods: {
        login() {
            this.axios.post('login', {
                email: this.loginEmail,
                password: this.loginPassword,
                remember: this.rememberMe,
            })
                .then(response => {
                    const user = {
                        ...response.data.user,
                        isAuthenticated: true
                    }
                    this.$store.commit('setUser', user);
                    localStorage.setItem('access_token', response.data.token);
                    this.router.push('/');
                })
        },
        register() {
            this.axios.post('register', {
                name: this.registerNickname,
                email: this.registerEmail,
                password: this.registerPassword,
                password_confirmation: this.registerPasswordConfirm,
            })
                .then(response => {
                    console.log(response)
                })
        },
    }
});
</script>

<style scoped>

</style>
