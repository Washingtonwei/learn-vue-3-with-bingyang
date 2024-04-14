<template>
  <div class="blog-post">
    <p>
      {{ message }}
    </p>
    <!-- Display the id, title, and content of a blog post. -->
    <h2>{{ id }} - {{ blogPostTitle }}</h2>
    <h4>{{ blogPostContent }}</h4>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let message = ref('This is the BlogPost component.')
const props = defineProps(['id', 'blogPostTitle', 'blogPostContent'])
// console.log(props.blogPostTitle)
// defineProps({
//   id: Number,
//   blogPostTitle: String,
//   blogPostContent: String
// })
</script>

<style scoped>
.blog-post {
  background-color: aqua;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
