<template>
    <div class="blog-posts-greeting">
        <h1>Welcome to the blog posts page!</h1>
        <h2>
            Here you can find all the blog posts that have been published by our
            authors. Click on any of them to read more.
        </h2>
        <button @click="goToRandomBlogPost">Show Random Blog Post</button>
    </div>
</template>

<script setup>
import api from '@/apis/blogPosts'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const blogPosts = ref([])
const router = useRouter()

// Fetch all blog posts on component mount
onMounted(loadBlogPosts)

async function loadBlogPosts() {
    try {
        blogPosts.value = await api.findAll()
    } catch (error) {
        console.error('Failed to fetch blog posts:', error)
    }
}

// Function to navigate to a random blog post
function goToRandomBlogPost() {
    if (blogPosts.value.length === 0) {
        alert('No blog posts available!')
        return
    }
    const randomIndex = Math.floor(Math.random() * blogPosts.value.length)
    const randomBlogPost = blogPosts.value[randomIndex]
    router.push({ name: 'blogPost', params: { id: randomBlogPost.id } })
}
</script>

<style lang="scss" scoped>
.blog-posts-greeting {
    padding: 1.5rem;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h1 {
        margin-bottom: 1rem;
        font-size: 2rem;
        font-weight: bold;
        color: #333;
        text-align: center;
    }

    h2 {
        font-size: 1.8rem;
        font-weight: 500;
        color: #555;
        text-align: center;
    }
}
</style>