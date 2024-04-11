<template>
  <div class="card">
    <h2>Message: {{ message }}</h2>
    <h2>Number: {{ number }}</h2>
    <button @click="changeMessageToUpperCase">
      Change message to upper case
    </button>
    <button @click="incrementNumber">Increment number</button>
  </div>

  <div class="card">
    <h2>Name: {{ wizard.name }}</h2>
    <h2>Wand: {{ wizard.wand }}</h2>
    <button @click="changeNameToUpperCase">Change name to upper case</button>
    <button @click="changeWandCore">Change wand core</button>
    <button @click="changeWizard">Change wizard</button>

    <!-- You can also mutate a ref directly in event handlers -->
    <button @click="wizard.wand.core = 'Unicorn hair'">Change wand core</button>
  </div>

  <div class="card">
    <h2>Array: {{ wizards }}</h2>
    <button @click="wizards.push('Draco')">Add a new wizard</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let message = ref('Hello, Reactivity!')
let number = ref(1)

function changeMessageToUpperCase() {
  message.value = message.value.toUpperCase()
  console.log(message.value)
}
function incrementNumber() {
  number.value += 1
  console.log(number.value)
}

let wizard = ref({
  id: 1001,
  name: 'Harry Potter',
  house: 'Gryffindor',
  age: 17, // Age during the final battle of Hogwarts
  wand: {
    core: 'Phoenix feather',
    wood: 'Holly'
  }
})

function changeNameToUpperCase() {
  wizard.value.name = wizard.value.name.toUpperCase()
}
function changeWandCore() {
  wizard.value.wand.core = 'Unicorn hair'
}
function changeWizard() {
  wizard.value = {
    id: 1002,
    name: 'Hermione Granger',
    house: 'Gryffindor',
    age: 17,
    wand: {
      core: 'Dragon heartstring',
      wood: 'Vine'
    }
  }
}

let wizards = ref(['Harry', 'Hermione', 'Ron'])
</script>

<style scoped>
.card {
  background-color: purple;
  color: white;
  padding: 20px 10px;
  margin-bottom: 10px;
}
</style>
