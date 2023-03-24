<template>
    <ion-tab-bar slot="bottom" class="py-0 bg-white shadow-top border-0">
        <ion-tab-button tab="home" @click="router.push('/')">
            <ion-icon size="large" icon="assets/icon/house-duotone.svg" v-if="isCurrentTab('home')"/>
            <ion-icon size="large" icon="assets/icon/house.svg" v-else/>
        </ion-tab-button>

        <ion-tab-button tab="calendar" @click="router.push('calendar')">
            <ion-icon size="large" icon="assets/icon/calendar-days-duotone.svg" v-if="isCurrentTab('calendar')"/>
            <ion-icon size="large" icon="assets/icon/calendar-days.svg" v-else/>
        </ion-tab-button>

        <ion-tab-button tab="contact" @click="router.push('contact')">
            <ion-icon size="large" icon="assets/icon/users-duotone.svg" v-if="isCurrentTab('contact')"/>
            <ion-icon size="large" icon="assets/icon/users.svg" v-else/>
        </ion-tab-button>

        <ion-tab-button tab="settings" @click="router.push('settings')">
            <ion-icon size="large" icon="assets/icon/gear-duotone.svg" v-if="isCurrentTab('settings')"/>
            <ion-icon size="large" icon="assets/icon/gear.svg" v-else/>
        </ion-tab-button>
    </ion-tab-bar>
</template>

<script>
import {defineComponent} from 'vue';
import router from "@/router";
import {IonTabBar, IonTabButton, IonIcon} from '@ionic/vue';
import {useRouter} from "vue-router";

export default defineComponent({
    name: 'TabBarComponent',
    components: { IonTabBar, IonTabButton, IonIcon },
    setup() {
        const router = useRouter();
        return {router};
    },
    methods: {
        isCurrentTab(tabName) {
            return router.currentRoute.value.name === tabName;
        }
    }
});
</script>

<style scoped>

</style>
