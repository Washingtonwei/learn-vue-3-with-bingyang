import { createRouter, createWebHistory } from 'vue-router'

// Import the components that we want to route to
import Home from '@/views/Home.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import About from '@/views/About.vue'
import BlogPost from '@/views/BlogPost.vue'
import BlogPostsGreeting from '@/views/BlogPostsGreeting.vue'
import NotFound from '@/views/NotFound.vue'
import Ads from '@/views/Ads.vue'

// Create a router instance
const router = createRouter({
  // Provide the history implementation to use. We are using the HTML5 history API
  history: createWebHistory(),
  // Define some routes, each route record should map to a component
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/blogPosts',
      name: 'blogPosts',
      component: BlogPosts,
      redirect: { name: 'blogPostsGreeting' },
      children: [
        { path: '', name: 'blogPostsGreeting', component: BlogPostsGreeting },
        {
          path: '/blogPosts/:id(\\d+)',
          name: 'blogPost',
          components: {
            default: BlogPost,
            sidebar: Ads,
          },
        },
      ],
    },
    { path: '/about', name: 'about', component: About },
    {
      path: '/:pathMatch(.*)*', // Match any path that hasn't been matched by a previous route
      name: 'notFound',
      component: NotFound,
    },
  ],
})

// Export the router instance
export default router
