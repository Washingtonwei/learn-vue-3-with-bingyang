<template>
    <div class="main-layout">
        <Navigation></Navigation>
        <!-- <router-view></router-view> -->
        <router-view v-slot="{ Component, route }">
            <transition mode="out-in"
                :enter-active-class="route.meta.enterAnimation || 'animate__animated animate__fadeIn'"
                :leave-active-class="route.meta.leaveAnimation || 'animate__animated animate__fadeOut'">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';
</script>

<style lang="scss" scoped>
.main-layout {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>