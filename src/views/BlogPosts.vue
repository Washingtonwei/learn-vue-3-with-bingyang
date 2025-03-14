<template>
    <div class="blog-posts-layout">
        <aside class="blog-post-list">
            <BlogPostList></BlogPostList>
        </aside>
        <main class="blog-post-content-with-sidebar">
            <!-- This is the default router-view -->
            <router-view class="blog-post-content"></router-view>
            <!-- This is the named router-view -->
            <router-view name="sidebar"></router-view>
        </main>
    </div>
</template>

<script setup>
import BlogPostList from '@/components/BlogPostList.vue'
</script>

<style lang="scss" scoped>
.blog-posts-layout {
    display: flex;
    width: 100%;
    gap: 1rem;

    .blog-post-list {
        flex: 0 0 25%
    }

    .blog-post-content-with-sidebar {
        display: flex;
        flex: 0 0 75%;

        .blog-post-content {
            flex: 1; // Take up the remaining space
        }
    }
}
</style>