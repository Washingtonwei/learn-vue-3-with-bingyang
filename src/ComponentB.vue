<template>
  <div style="background-color: lightblue">
    <h2>This is Component B.</h2>
    {{ messageFromApp }}
    <button @click="updateMessage">Update message</button>
  </div>
</template>

<script setup>
import { inject } from 'vue'

let { message: messageFromApp, updateMessage } = inject(
  'msg',
  'default message'
)
</script>

<style scoped></style>
