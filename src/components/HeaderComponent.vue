<template>
    <ion-header class="shadow-bottom !bg-white">
        <ion-toolbar class="!bg-white">
            <div class="flex items-center px-4 py-2">
                <a class="flex" href="#" @click.prevent="router.push('/settings')">
                    <ion-avatar class="h-12 w-12 border-2 border-primary">
                        <img :src="$store.state.user.profile_picture"
                             alt="Avatar"/>
                    </ion-avatar>
                </a>
                <ion-title class="flex" color="primary">Crew Party</ion-title>
            </div>
        </ion-toolbar>
    </ion-header>
</template>

<script>
import { defineComponent } from 'vue';
import { IonHeader, IonTitle, IonToolbar, IonAvatar } from "@ionic/vue";
import { useRouter } from "vue-router";

export default defineComponent({
    name: "HeaderComponent",
    components: { IonHeader, IonTitle, IonToolbar, IonAvatar },
    setup() {
        const router = useRouter();
        return { router };
    },
})
</script>

<style scoped>

</style>
