<template>
    <ion-header>
        <ion-toolbar>
            <div class="flex items-center p-4">
                <ion-avatar class="h-12 w-12">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                         alt="Avatar" class="h-12 w-12"/>
                </ion-avatar>
                <ion-title class="w-full" color="primary">Crew Party</ion-title>
                <a class="flex" href="#" @click.prevent="router.push('/login')" v-if="!$store.state.user.isAuthenticated">
                    <ion-icon class="text-primary text-4xl" src="assets/icon/log-in-outline.svg"></ion-icon>
                </a>
            </div>
        </ion-toolbar>
    </ion-header>
</template>

<script>
import { defineComponent } from 'vue';
import { IonHeader, IonTitle, IonToolbar, IonAvatar, IonIcon } from "@ionic/vue";
import { useRouter } from "vue-router";

export default defineComponent({
    name: "HeaderComponent",
    components: { IonHeader, IonTitle, IonToolbar, IonAvatar, IonIcon },
    setup() {
        const router = useRouter();
        return { router };
    },
})
</script>

<style scoped>

</style>
