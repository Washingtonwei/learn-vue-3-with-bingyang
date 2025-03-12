import { createRouter, createWebHistory } from 'vue-router'

// Import the components that we want to route to
import Home from '@/views/Home.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import About from '@/views/About.vue'

// Create a router instance
const router = createRouter({
  // Provide the history implementation to use. We are using the HTML5 history API
  history: createWebHistory(),
  // Define some routes, each route record should map to a component
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/blogPosts', name: 'blogPosts', component: BlogPosts },
    { path: '/about', name: 'about', component: About },
  ],
})

// Export the router instance
export default router
