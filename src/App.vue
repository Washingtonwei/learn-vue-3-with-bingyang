<template>
  <h1>{{ message }}</h1>
  <button @click="sortUsersByAge">Sort users by age</button>
  <ul>
    <li v-for="(user, index) in users" :key="user.id">
      {{ index }} - {{ user.id }} - {{ user.name }} - {{ user.age }} -
      {{ user.isActive }}
    </li>
  </ul>

  <hr />

  <table>
    <tr>
      <th>Index</th>
      <th>Id</th>
      <th>Name</th>
      <th>Age</th>
      <th>Operation</th>
    </tr>
    <tr v-for="(user, index) in users" :key="user.id">
      <td>{{ index }}</td>
      <td>{{ user.id }}</td>
      <td :class="{ inactive: !user.isActive }">{{ user.name }}</td>
      <td>{{ user.age }}</td>
      <td>
        <button @click="user.isActive = !user.isActive">
          {{ user.isActive ? 'Deactivate' : 'Restore' }}
        </button>
      </td>
    </tr>
  </table>

  <hr />
  <p>Use v-for to iterate through the properties of an object:</p>
  <div v-for="(value, key, index) in users[0]">
    {{ index }} - {{ key }}: {{ value }}
  </div>
</template>

<script setup>
import { ref } from 'vue'

let message = ref('Hello, v-for!')

const users = ref([
  { id: 1001, name: 'John Smith', age: 26, isActive: false },
  { id: 1002, name: 'Tom Doe', age: 16, isActive: false },
  { id: 1003, name: 'Frankin Wong', age: 18, isActive: true }
])

function sortUsersByAge() {
  users.value.sort((a, b) => a.age - b.age)
}
</script>

<style scoped>
.inactive {
  color: red;
  text-decoration: line-through;
}
</style>
