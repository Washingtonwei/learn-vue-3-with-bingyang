<template>
  <!-- Passing data to child component through custom attributes. -->
  <BlogPost
    id="1"
    blogPostTitle="What is a muggle?"
    blogPostContent="A muggle is a person who lacks any sort of magical ability..."
  >
  </BlogPost>

  <!-- Technically, you can use camelCase when passing props to a child component. However, the convention is using kebab-case to align with HTML attributes. -->
  <BlogPost
    id="1"
    blog-post-title="What is a muggle?"
    blog-post-content="A muggle is a person who lacks any sort of magical ability..."
  >
  </BlogPost>

  <!-- We can use v-bind to pass data in parent component to child component. -->
  <BlogPost
    :id="blogPostId"
    :blog-post-title="blogPostTitle"
    :blog-post-content="blogPostContent"
  ></BlogPost>

  <hr />

  <BlogPost
    v-for="post in posts"
    :key="post.id"
    :id="post.id"
    :blog-post-title="post.blogPostTitle"
    :blog-post-content="post.blogPostContent"
  ></BlogPost>
  <!-- Think about this, what if a blog post have 10 properties to display, e.g. publish date, author, number of likes etc. This will make the above BlogPost element very lengthy. -->

  <hr />

  <!-- Binding multiple properties using an object. -->
  <BlogPost v-for="post in posts" :key="post.id" v-bind="post"></BlogPost>
</template>

<script setup>
import BlogPost from '@/BlogPost.vue'
import { ref } from 'vue'

let blogPostId = ref(2)
let blogPostTitle = ref(
  'HP and the Cursed Child Broadway production suspended until April'
)
let blogPostContent = ref(
  'Adding to the earlier post, the Broadway production of Harry Potter and the Cursed Child has been...'
)

let posts = ref([
  {
    id: 1,
    blogPostTitle: 'What is a muggle in HP world?',
    blogPostContent:
      'A muggle is a person who lacks any sort of magical ability...'
  },
  {
    id: 2,
    blogPostTitle:
      'HP and the Cursed Child Broadway production suspended until April',
    blogPostContent:
      'Adding to the earlier post, the Broadway production of Harry Potter and the Cursed Child has been...'
  },
  {
    id: 3,
    blogPostTitle: 'Potter DIY: Make Your Own “Harry Potter Puppet Pal”',
    blogPostContent:
      'We all remember those iconic YouTube videos of Harry and the gang and probably couldn’t get “The Mysterious...'
  },
  {
    id: 4,
    blogPostTitle: 'Fan Project Brings Life to “Harry Potter” in Translation',
    blogPostContent:
      'It’s no secret that the Harry Potter series is a global phenomenon, having been translated into over 80 languages to date....'
  }
])
</script>

<style scoped></style>
