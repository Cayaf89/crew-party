<template>
    <div class="w-full flex flex-col items-center justify-center h-screen">
        <h2 class="text-3xl font-bold">Welcome to your dashboard {{ userStore.username }}</h2>
        <p>We hope you find exactly what you're looking for in a place to stay.</p>
    </div>
</template>

<script>
import { useUserStore } from "../stores/user";

export default {
    name: "DashboardView",
    data() {
        return {
            userStore: useUserStore()
        }
    }
}
</script>

<style scoped>

</style>
