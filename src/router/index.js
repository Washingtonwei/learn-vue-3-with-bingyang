import { createRouter, createWebHistory } from 'vue-router'

// No need to import the components here, they will be lazy-loaded
import { getUserRole, isAuthenticated } from '@/apis/auth'

// Create a router instance
const router = createRouter({
  // Provide the history implementation to use. We are using the HTML5 history API
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    const scrollBehaviorOptions = {
      top: 0,
      behavior: 'smooth',
    }

    // If the route has a meta field with a scrollToElement property, scroll to that element
    if (to.meta.scrollToElement) {
      scrollBehaviorOptions.el = to.meta.scrollToElement
    }

    // If the route has a savedPosition, return it, otherwise return the scrollBehaviorOptions
    return savedPosition ?? scrollBehaviorOptions
  },
  // Define some routes, each route record should map to a component
  routes: [
    {
      path: '/',
      name: 'mainLayout',
      component: () => import('@/views/MainLayout.vue'),
      redirect: { name: 'home' },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/Home.vue'),
          meta: { requiresAuth: false, title: 'Home', isNavLink: true },
        },
        {
          path: '/blogPosts',
          name: 'blogPosts',
          component: () => import('@/views/BlogPosts.vue'),
          meta: {
            title: 'Blog Posts',
            isNavLink: true,
            enterAnimation: 'animate__animated animate__bounceIn',
            leaveAnimation: 'animate__animated animate__bounceOut',
          },
          redirect: { name: 'blogPostsGreeting' },
          children: [
            {
              path: '',
              name: 'blogPostsGreeting',
              component: () => import('@/views/BlogPostsGreeting.vue'),
              meta: { requiresAuth: false },
            },
            {
              path: '/blogPosts/:id(\\d+)',
              name: 'blogPost',
              components: {
                default: () => import('@/views/BlogPost.vue'),
                sidebar: () => import('@/views/Ads.vue'),
              },
              meta: {
                requiresAuth: true,
                scrollToElement: '.blog-posts-layout',
              },
            },
          ],
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/About.vue'),
          meta: { requiresAuth: false, title: 'About', isNavLink: true },
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/:pathMatch(.*)*', // Match any path that hasn't been matched by a previous route
      name: 'notFound',
      component: () => import('@/views/NotFound.vue'),
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

  const userRole = getUserRole()
  // Check role-based access
  if (to.meta.roles && !to.meta.roles.includes(userRole)) {
    return { name: 'home' } // Redirect to the home page
  }
})

// Global after each navigation guard (for cleanup or loggin)
router.afterEach((to, from) => {
  console.log(`Successfully navigated to: ${to.fullPath}`)
})

// Export the router instance
export default router
