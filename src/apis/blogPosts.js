const BASE_URL = 'http://localhost:3000/blogPosts'

/**
 * Fetch all blog posts from the API
 * @returns {Promise<Array>} A promise that resolves to an array of blog posts
 */
const findAll = async () => {
  try {
    const response = await fetch(BASE_URL)
    if (!response.ok) {
      throw new Error(`Error fetching blog posts: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error // Rethrow the error to be caught by the caller
  }
}

/**
 * Fetch a single blog post by its ID
 * @param {number} id The ID of the blog post to fetch
 * @returns {Promise<Object>} A promise that resolves to the blog post object
 */
const findById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`)
    if (!response.ok) {
      throw new Error(
        `Error fetching blog post with ID ${id}: ${response.statusText}`
      )
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error // Rethrow the error to be caught by the caller
  }
}

export default { findAll, findById }
