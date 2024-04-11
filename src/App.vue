<template>
  <h1>{{ message }}</h1>
  <h1>Welcome, {{ formData.name }}</h1>
  <form action="">
    <div>
      <span>Name:</span>
      <span>
        <!-- formData.name is synced after "change" event instead of "input" event. -->
        <input type="text" v-model.lazy="formData.name" />
      </span>
    </div>
    <div>
      <span>Gender:</span>
      <span>
        <input type="radio" id="male" value="M" v-model="formData.gender" />
        <label for="male">M</label>
        <input type="radio" id="female" value="F" v-model="formData.gender" />
        <label for="female">F</label>
      </span>
    </div>
    <div>
      <span>Age:</span>
      <span>
        <!-- Input is automatically typecast as a number. -->
        <input type="text" id="age" v-model.number="formData.age" />
      </span>
    </div>
    <div>
      <span>Hobbies:</span>
      <!-- We can bind multiple checkboxes to the same array. -->
      <input type="checkbox" value="basketball" v-model="formData.hobbies" />
      <label for="basketball">Basketball</label>
      <input type="checkbox" value="football" v-model="formData.hobbies" />
      <label for="football">Football</label>
      <input type="checkbox" value="js" v-model="formData.hobbies" />
      <label for="js">JavaScript</label>
    </div>
    <div>
      <span>Profession:</span>
      <select v-model="formData.profession">
        <option value="">Please select one</option>
        <option value="1">Software Engineer</option>
        <option value="2">Data Scientist</option>
        <option value="3">Product Manager</option>
        <option value="4">Professor</option>
      </select>
    </div>
    <div>
      <span>Description:</span>
      <!-- Leading and trailing whitespace is removed automatically. -->
      <textarea
        v-model.trim="formData.desc"
        @keyup.enter="submitForm"
      ></textarea>
    </div>
    <div>
      <input type="reset" value="Reset" @click="resetForm" />
      <!-- Prevent the form from submitting through form action. -->
      <input type="submit" value="Submit" @click.prevent="submitForm" />
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

let message = ref('Hello, v-model!')

let formData = ref({
  name: '',
  gender: '',
  age: '',
  hobbies: [],
  profession: '',
  desc: ''
})

function resetForm() {
  formData.value = {
    name: '',
    gender: '',
    age: '',
    hobbies: [],
    profession: '',
    desc: ''
  }
}

function submitForm() {
  console.log(JSON.stringify(formData.value))
  // We can use axios or fetch() to submit data to the back end.
}
</script>

<style scoped>
form {
  padding: 20px;
}

form div {
  height: 40px;
  line-height: 40px;
}

form div span {
  display: inline-block;
  width: 100px;
}
</style>
