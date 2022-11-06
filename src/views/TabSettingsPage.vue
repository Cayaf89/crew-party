<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ExploreContainer name="Settings"/>
        </ion-content>
    </ion-page>
</template>

<script>
import {defineComponent} from 'vue';
import {IonPage, IonContent} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
    name: 'SettingsPage',
    components: {ExploreContainer, IonContent, IonPage}
});
</script>
