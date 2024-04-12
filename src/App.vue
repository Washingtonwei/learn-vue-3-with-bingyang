<template>
  <h1>{{ message }}</h1>
  <div>
    <form @submit.prevent="register">
      <div>
        <label for="email">Email:</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Create a password"
        />
      </div>
      <button type="submit" :disabled="!isFormValid">Register</button>
    </form>
  </div>
  <hr />
  <div class="card">
    <h2>Name: {{ wizard1.name }}</h2>
    <h2>Wand: {{ wizard1.wand }}</h2>
    <h2>Age: {{ wizard1.age }}</h2>
    <button @click="wizard1.name = wizard1.name.toUpperCase()">
      Change name to upper case
    </button>
    <button @click="wizard1.wand.core = 'Unicorn hair'">
      Change wand core
    </button>
    <button @click="wizard1.age = 20">Change age</button>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue'
let message = ref('Hello, watchEffect!')
const email = ref('')
const password = ref('')
const isFormValid = ref(false)

// watch([email, password], () => {
//   const hasEmail = email.value.length > 0
//   const hasPassword = password.value.length > 0
//   isFormValid.value = hasEmail && hasPassword
// })

watchEffect(() => {
  console.log('watchEffect')
  const hasEmail = email.value.length > 0
  const hasPassword = password.value.length > 0
  isFormValid.value = hasEmail && hasPassword
})

const register = () => {
  alert('Registration successful!')
  // Registration logic goes here
}

let wizard1 = ref({
  id: 1001,
  name: 'Harry Potter',
  house: 'Gryffindor',
  age: 17,
  wand: {
    core: 'Phoenix feather',
    wood: 'Holly'
  }
})

watchEffect(() => {
  console.log(wizard1.value.name, wizard1.value.wand.core)
})

watchEffect(() => {
  console.log(wizard1.value)
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
