<template>
  <h1>{{ message }}</h1>
  <button @click="sortUsersByAge">Sort users by age</button>
  <button @click="hideInactiveUsers">Hide inactive users</button>
  <button @click="showFirstTwoUsers">Show first two users</button>
  <ul>
    <li v-for="(user, index) in users" :key="user.id">
      {{ index }} - {{ user.id }} - {{ user.name }} - {{ user.age }} -
      {{ user.isActive }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

let message = ref('Hello, Array Change Detection!')

const users = ref([
  { id: 1001, name: 'John Smith', age: 26, isActive: false },
  { id: 1002, name: 'Tom Doe', age: 16, isActive: false },
  { id: 1003, name: 'Frankin Wong', age: 18, isActive: true }
])

function sortUsersByAge() {
  users.value.sort((a, b) => a.age - b.age)
}

// filter is a non-mutating method, so we need to replace the old array
function hideInactiveUsers() {
  users.value = users.value.filter((user) => user.isActive)
}

// slice is a non-mutating method, so we need to replace the old array
function showFirstTwoUsers() {
  users.value = users.value.slice(0, 2)
}
</script>

<style scoped>
.inactive {
  color: red;
  text-decoration: line-through;
}
</style>
