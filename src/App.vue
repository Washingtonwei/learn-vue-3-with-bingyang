<template>
  <h1>v-model vs v-bind</h1>
  <h2>message: {{ message }}</h2>
  <div>
    <p>v-model = v-bind + @input</p>
    <input
      type="text"
      v-bind:value="message"
      @input="message = $event.target.value"
    />
  </div>
  <div>
    <p>v-model</p>
    <input type="text" v-model="message" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

let message = ref('Hello!')
</script>

<style scoped></style>
