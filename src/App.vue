<template>
  <ButtonCounter></ButtonCounter>
  <ButtonCounter></ButtonCounter>

  <button-counter></button-counter>

  <hr />

  <div style="background-color: orange; padding: 5px">
    This is the root component.
    <ComponentA></ComponentA>
    <ComponentA></ComponentA>
  </div>
</template>

<script setup>
import ButtonCounter from './ButtonCounter.vue'
import ComponentA from '@/ComponentA.vue'
</script>

<style scoped></style>
