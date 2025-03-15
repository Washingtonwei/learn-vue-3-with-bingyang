<template>
    <div>
        <h1>This is the about page!</h1>
    </div>
</template>

<script setup>
import { onBeforeRouteLeave } from 'vue-router'

// This hook will be called when we leave the about page
onBeforeRouteLeave((to, from) => {
    window.alert('Don\'t forget to like us on Facebook!')
})
</script>

<style lang="scss" scoped></style>