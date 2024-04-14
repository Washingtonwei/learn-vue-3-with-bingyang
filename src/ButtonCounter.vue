<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>

<script setup>
import { ref } from 'vue'

let count = ref(0)
</script>

<style scoped>
button {
  background-color: #4f46e5;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.2s;
}

button:hover {
  background-color: #4138d9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
