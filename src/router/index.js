import { createRouter, createWebHistory } from 'vue-router'

// Import the components that we want to route to
import Home from '@/views/Home.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import About from '@/views/About.vue'
import BlogPost from '@/views/BlogPost.vue'
import BlogPostsGreeting from '@/views/BlogPostsGreeting.vue'
import NotFound from '@/views/NotFound.vue'
import Ads from '@/views/Ads.vue'
import Login from '@/views/Login.vue'
import MainLayout from '@/views/MainLayout.vue'
import { isAuthenticated } from '@/apis/auth'

// Create a router instance
const router = createRouter({
  // Provide the history implementation to use. We are using the HTML5 history API
  history: createWebHistory(),
  // Define some routes, each route record should map to a component
  routes: [
    {
      path: '/',
      name: 'mainLayout',
      component: MainLayout,
      redirect: { name: 'home' },
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
          meta: { requiresAuth: false },
        },
        {
          path: '/blogPosts',
          name: 'blogPosts',
          component: BlogPosts,
          redirect: { name: 'blogPostsGreeting' },
          children: [
            {
              path: '',
              name: 'blogPostsGreeting',
              component: BlogPostsGreeting,
              meta: { requiresAuth: false },
            },
            {
              path: '/blogPosts/:id(\\d+)',
              name: 'blogPost',
              components: {
                default: BlogPost,
                sidebar: Ads,
              },
              meta: { requiresAuth: true },
            },
          ],
        },
        {
          path: '/about',
          name: 'about',
          component: About,
          meta: { requiresAuth: false },
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false },
    },
    {
      path: '/:pathMatch(.*)*', // Match any path that hasn't been matched by a previous route
      name: 'notFound',
      component: NotFound,
      meta: { requiresAuth: false },
    },
  ],
})

router.beforeEach((to, from) => {
  console.log(from.name, '->', to.name)
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    // Redirect to the login page with the originally requested page as the redirect query parameter
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

// Global after each navigation guard (for cleanup or loggin)
router.afterEach((to, from) => {
  console.log(`Successfully navigated to: ${to.fullPath}`)
})

// Export the router instance
export default router
