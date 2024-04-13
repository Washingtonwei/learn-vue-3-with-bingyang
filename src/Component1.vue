<template>
  <div style="background-color: aqua; padding: 10px; margin: 20px">
    <h2>This is the Component1 component.</h2>
  </div>
</template>

<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'

console.log('Component1 is setup.')

onBeforeMount(() => {
  console.log('Component1 is before mount.')
})
onMounted(() => {
  console.log('Component1 is mounted.')
})
onBeforeUpdate(() => {
  console.log('Component1 is before update.')
})
onUpdated(() => {
  console.log('Component1 is updated.')
})
onBeforeUnmount(() => {
  console.log('Component1 is before unmount.')
})
onUnmounted(() => {
  console.log('Component1 is unmounted.')
})
</script>
