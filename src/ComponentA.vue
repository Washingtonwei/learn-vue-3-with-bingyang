<template>
  <h2>This is Component A.</h2>
  <div style="background-color: lightgreen; padding-left: 10px">
    <ComponentB></ComponentB>
    <ComponentB></ComponentB>
  </div>
</template>

<script setup>
import ComponentB from './ComponentB.vue'
</script>

<style scoped></style>
