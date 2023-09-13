<template>

    <router-link :to="to" class="btn m-1" :class="color">
        <slot />
    </router-link>

</template>

<script setup>
import {defineProps} from "vue"

defineProps({
    to : Object,
    color : String
})

</script>