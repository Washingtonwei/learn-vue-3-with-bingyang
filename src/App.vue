<template>
  <h1>{{ message }}</h1>
  <button @click="sortUsersByAge">Sort users by age</button>
  <br />
  <button @click="hideInactive = !hideInactive">{{ toggleButtonName }}</button>

  <h2>Number of active users (computed property): {{ numberOfActiveUsers }}</h2>
  <h2>Number of active users (computed property): {{ numberOfActiveUsers }}</h2>
  <h2>Number of active users (computed property): {{ numberOfActiveUsers }}</h2>

  <h2>
    Number of active users (method call): {{ computeNumberOfActiveUsers() }}
  </h2>
  <h2>
    Number of active users (method call): {{ computeNumberOfActiveUsers() }}
  </h2>
  <h2>
    Number of active users (method call): {{ computeNumberOfActiveUsers() }}
  </h2>
  <table>
    <tr>
      <th>Index</th>
      <th>Id</th>
      <th>Name</th>
      <th>Age</th>
      <th>Operation</th>
    </tr>
    <tr v-for="(user, index) in filteredUsers" :key="user.id">
      <td>{{ index + 1 }}</td>
      <td>{{ user.id }}</td>
      <td :class="{ inactive: !user.isActive }">
        {{ user.name }}
      </td>
      <td>{{ user.age }}</td>
      <td>
        <button @click="user.isActive = !user.isActive">
          {{ user.isActive ? 'Deactivate' : 'Restore' }}
        </button>
      </td>
    </tr>
  </table>
</template>

<script setup>
import { computed, ref } from 'vue'

let message = ref('Hello, Computed Properties!')

const users = ref([
  { id: 1001, name: 'John Smith', age: 26, isActive: false },
  { id: 1002, name: 'Tom Doe', age: 16, isActive: false },
  { id: 1003, name: 'Frankin Wong', age: 18, isActive: true }
])

let hideInactive = ref(false)

function sortUsersByAge() {
  users.value.sort((a, b) => a.age - b.age)
}

let toggleButtonName = computed(() =>
  hideInactive.value ? 'Show all' : 'Hide inactive'
)

let numberOfActiveUsers = computed(() => {
  console.log('computed property')
  return users.value.filter((user) => user.isActive).length
})

let computeNumberOfActiveUsers = () => {
  console.log('method call')
  return users.value.filter((user) => user.isActive).length
}

let filteredUsers = computed(() =>
  hideInactive.value ? users.value.filter((user) => user.isActive) : users.value
)
</script>

<style scoped>
.inactive {
  color: red;
  text-decoration: line-through;
}
</style>
