import axios from 'axios'

export function limit(str, limit) {
  return str.length > limit ? str.substring(0, limit) + '...' : str
}

export async function getRequest(url) {
  var data = null
  let error = null
  let isLoading = true

  try {
    const response = await axios.get(url)
    data = Array.isArray(response.data) ? response.data[0] : response.data
    console.log(data)
  } catch (err) {
    error = err.message || 'An error occurred while fetching data'
  } finally {
    isLoading = false
  }

  return { data, error, isLoading }
}
