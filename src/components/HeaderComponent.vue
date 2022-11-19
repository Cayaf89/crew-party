<template>
    <ion-header>
        <ion-toolbar>
            <div class="flex items-center p-4">
                <a class="flex" href="#" @click.prevent="router.push('/settings')">
                    <ion-avatar class="h-12 w-12 border-2 border-primary">
                        <img :src="$store.state.user.profile_picture"
                             alt="Avatar"/>
                    </ion-avatar>
                </a>
                <ion-title class="flex" color="primary">Crew Party</ion-title>
                <a class="flex" href="#" @click.prevent="router.push('/login')"
                   v-if="!$store.state.user.isAuthenticated">
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
