import { ref } from 'vue'

const isAuthenticated = ref(false) // A global state that tracks whether the user is logged in

const userRole = ref('') // Stores 'regular' or 'vip'

const login = async (username, password) => {
  // Simulate a successful login
  isAuthenticated.value = true
  userRole.value = username === 'vipUser' ? 'vip' : 'regular'
}

const logout = async () => {
  // Simulate a successful logout
  isAuthenticated.value = false
  userRole.value = ''
}

const getUserRole = () => {
  return userRole.value
}

export { isAuthenticated, login, logout, getUserRole }
