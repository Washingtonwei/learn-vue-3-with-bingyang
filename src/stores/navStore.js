import { ref } from 'vue'
import { useRouter } from 'vue-router'

const navRoutes = ref([]) // Stores all navigable routes

export function useNavStore() {
  const router = useRouter()

  // Update the navRoutes array with all routes that have the isNavLink meta
  const updateNavRoutes = () => {
    const allRoutes = router.getRoutes()
    navRoutes.value = allRoutes.filter((route) => route.meta?.isNavLink)
  }

  // Auto-run once
  if (navRoutes.value.length === 0) {
    updateNavRoutes()
  }

  return {
    navRoutes,
    updateNavRoutes,
  }
}
