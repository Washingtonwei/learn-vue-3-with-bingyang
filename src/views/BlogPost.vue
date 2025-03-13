<template>
    <div class="blog-post-container">
        <div v-if="loading">Loading...</div>
        <div v-else-if="blogPost">
            <div>Blog Id: {{ $route.params.id }}</div>
            <h1 class="blog-title">{{ blogPost.title }}</h1>
            <div class="blog-content">
                <p>{{ blogPost.content }}</p>
            </div>
        </div>
        <div v-else>Failed to load blog post. Please try again later.</div>
    </div>
</template>

<script setup>
import api from '@/apis/blogPosts'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const blogPost = ref(null)
const loading = ref(true)
const route = useRoute()

async function loadBlogPost(id) {
    try {
        blogPost.value = await api.findById(id)
    } catch (error) {
        console.error(`Failed to load blog post with id ${id}`, error)
    } finally {
        loading.value = false
    }
}

watch(() => route.params.id, (newId, oldId) => {
    loadBlogPost(newId)
}, { immediate: true })
</script>

<style lang="scss" scoped>
.blog-post-container {
    padding: 1.5rem;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 0 auto;

    .blog-title {
        font-size: 2rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 1rem;
        text-align: center;
    }

    .blog-content {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #555;
        text-align: justify;

        p {
            margin-bottom: 1rem;
        }
    }
}
</style>