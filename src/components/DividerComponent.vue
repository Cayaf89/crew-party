<template>
    <div class="w-full flex items-center p-8">
        <hr class="w-full border-primary border-[1px] rounded-full">
        <span class="text-primary font-medium px-6">{{ title }}</span>
        <hr class="w-full border-primary border-[1px] rounded-full">
    </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'DividerComponent',
    props: {
        title: String
    }
});
</script>

<style scoped>

</style>
