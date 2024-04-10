<template>
  <h1>{{ message }}</h1>
  <img v-bind:src="imageUrl" alt="" />
  <br />

  <!-- shorthand for v-bind -->
  <img :src="imageUrl" alt="" />
  <br />

  <button @click="changeImg">Change image</button>

  <br />

  <hr />

  <input type="text" :value="defaultInputText" />

  <hr />

  <p :class="className">Harry Potter</p>

  <!-- define a JS object in :class -->
  <p :class="{ inactive: isInactive, center: isCenter }">
    <!-- if you think embedding a JS object in HTML is verbose, you can choose to move the object to the script, 
        give it a name, and only put the JS object name in :class -->
    Harry Potter
  </p>

  <!-- define a JS array in :class -->
  <p :class="['active', 'center']">Harry Potter</p>
</template>

<script setup>
import { ref } from 'vue'

let message = 'Hello, v-bind!'
let imageUrl = ref('public/img/banner_1.jpg')

function changeImg() {
  imageUrl.value = 'public/img/banner_2.jpg'
}

let defaultInputText = 'Write something here...'

let className = ref('active')
let isInactive = ref(true)
let isCenter = ref(false)
</script>

<style scoped>
img {
  max-width: 300px;
}

.active {
  color: green;
}

.inactive {
  color: red;
  text-decoration: line-through;
}

.center {
  text-align: center;
}
</style>
