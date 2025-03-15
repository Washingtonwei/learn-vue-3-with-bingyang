import { ref } from 'vue'

const isAuthenticated = ref(false) // A global state that tracks whether the user is logged in

const login = async (username, password) => {
  // Simulate a successful login
  isAuthenticated.value = true
}

const logout = async () => {
  // Simulate a successful logout
  isAuthenticated.value = false
}

export { isAuthenticated, login, logout }
