<template>
    <ion-page>
        <ion-content :fullscreen="true" :padding="false" :scroll-y="false" class="calendar-content">
            <div class="flex flex-col grow h-full">
                <div class="flex justify-between px-4 py-4">
                    <div class="flex gap-x-3">
                        <button type="button" @click.prevent.stop="period = 'year'">
                            <ion-icon class="calendar-icon" icon="assets/icon/calendar-month.svg"></ion-icon>
                        </button>
                        <button type="button" @click.prevent.stop="period = 'month'">
                            <ion-icon class="calendar-icon" icon="assets/icon/calendar-week.svg"></ion-icon>
                        </button>
                        <button type="button" @click.prevent.stop="period = 'week'">
                            <ion-icon class="calendar-icon" icon="assets/icon/calendar-day.svg"></ion-icon>
                        </button>
                    </div>
                    <a @click.prevent.stop="calendarClick">
                        <ion-icon class="calendar-icon" icon="assets/icon/search-duotone.svg"></ion-icon>
                    </a>
                </div>
                <calendar-view
                    :show-date="showDate"
                    :display-period-uom="period"
                    current-period-label="Aujourd'hui"
                    class="theme-default holiday-ue-traditional holiday-ue-official">
                    <template #header="{ headerProps }">
                        <calendar-view-header
                            :header-props="headerProps"
                            @input="setShowDate" />
                    </template>
                </calendar-view>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonIcon } from '@ionic/vue';
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"

import "vue-simple-calendar/dist/style.css"
// The next two lines are optional themes
import "vue-simple-calendar/dist/css/default.css"
import "vue-simple-calendar/dist/css/holidays-ue.css"

export default defineComponent({
    name: 'CalendarPage',
    components: { IonContent, IonPage, CalendarView, CalendarViewHeader, IonIcon },
    data() {
        return {
            showDate: new Date(),
            period: 'month'
        }
    },
    methods: {
        setShowDate(d) {
            this.showDate = d;
        },
        calendarClick() {

        }
    }
});
</script>

<style lang="scss">
ion-content.calendar-content {
    --padding-bottom: 0px;
    --padding-top: 0;
    --padding-start: 0;
    --padding-end: 0;

    .calendar-icon {
        @apply h-7 w-7;
    }

    .inner-scroll {
        @apply flex;
    }

    .cv-wrapper {
        @apply min-h-[auto];
    }

    .cv-header {
        @apply flex flex-col items-center border-0 bg-white;

        .periodLabel {
            @apply hidden;
        }
        .cv-header-nav {
            @apply mt-0;
        }
    }

    .cv-header-days {
        @apply border-x-0;

        .cv-header-day {
            @apply bg-primary border-white text-white;
        }
    }

    .cv-day {
        .cv-day-number {
            @apply text-primary;
        }

        &.today {
            @apply bg-primary;

            .cv-day-number {
                @apply text-white;
            }
        }

        &.future {
            @apply bg-white;
        }
    }

    .cv-weeks {
        @apply border-0;
    }
}
</style>
