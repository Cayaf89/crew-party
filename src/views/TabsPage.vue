<template>
    <ion-page>
        <ion-tabs>
            <header-component></header-component>

            <ion-router-outlet></ion-router-outlet>

            <tab-bar-component></tab-bar-component>
        </ion-tabs>
    </ion-page>
</template>

<script>
import {defineComponent} from 'vue';
import { IonTabs, IonPage, IonRouterOutlet } from '@ionic/vue';
import { useRouter } from 'vue-router';
import router from "@/router";
import TabBarComponent from "@/components/TabBarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default defineComponent({
    name: 'TabsPage',
    components: {
        HeaderComponent, TabBarComponent, IonTabs, IonPage, IonRouterOutlet
    },
    setup() {
        const router = useRouter();
        return { router };
    },
    methods: {
        isCurrentTab(tabName) {
            return router.currentRoute.value.name === tabName;
        }
    }
});
</script>

<style lang="scss" scoped>

</style>
