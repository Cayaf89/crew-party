<script setup>
import { RouterView } from 'vue-router'
import MenuBar from "@/components/MenuBar.vue";
</script>

<template>
    <header>
        <MenuBar/>
    </header>

    <div>
        <router-view></router-view>
    </div>

</template>

<style>

</style>
