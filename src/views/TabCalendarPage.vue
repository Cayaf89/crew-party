<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ExploreContainer name="Calendar"/>
        </ion-content>
    </ion-page>
</template>

<script>
import {defineComponent} from 'vue';
import {IonPage, IonContent} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
    name: 'CalendarPage',
    components: {ExploreContainer, IonContent, IonPage}
});
</script>
