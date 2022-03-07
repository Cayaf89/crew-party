<script setup>
import { RouterView } from 'vue-router'
import MenuBar from "@/components/MenuBar.vue";
</script>

<template>
    <header>
        <MenuBar/>
    </header>

    <div class="margin-navbar">
        <router-view></router-view>
    </div>

</template>

<style>

</style>
