<template>
    <ion-app>
        <ion-router-outlet/>
        <ion-loading
            :is-open="$store.state.loader"
        >
        </ion-loading>
    </ion-app>
</template>

<script>
import { IonApp, IonLoading, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    components: {
        IonApp,
        IonRouterOutlet,
        IonLoading
    }
});
</script>
