<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ExploreContainer name="Home"/>
        </ion-content>
    </ion-page>
</template>

<script>
import {defineComponent} from 'vue';
import {IonPage, IonContent} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
    name: 'HomePage',
    components: {ExploreContainer, IonContent, IonPage},
    mounted() {

    }
});
</script>
