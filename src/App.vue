<template>
  <div class="card">
    <h1 ref="title">Hello, Template Refs!</h1>
    <input type="text" ref="input" />
    <button @click="printDomElements">Print DOM elements in console log</button>
    <button @click="changeTitle">Change title</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// declare a ref to hold the element reference
// the name must match template ref value
let title = ref()
const input = ref()

function printDomElements() {
  console.log(title.value)
  console.log(input.value)
}

function changeTitle() {
  title.value.innerText = 'Hello world!'
}

onMounted(() => {
  input.value.focus() // programmatically focus an input on component mount
})
</script>

<style scoped>
.card {
  background-color: purple;
  color: white;
  padding: 20px 10px;
  margin-bottom: 10px;
}
</style>
