<template>
    <div class="blog-posts-greeting">
        <h1>Welcome to the blog posts page!</h1>
        <h2>
            Here you can find all the blog posts that have been published by our
            authors. Click on any of them to read more.
        </h2>
    </div>
</template>

<script setup></script>

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