import axios from 'axios'
import { getToken } from './'

const API_URL = 'http://localhost:4000'

// set headers
const setHeaders = async () => {
  let token = await getToken()
  if (token) {
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
  }
}

// global api
const Api = {
  async get(endpoint, params) {
    await setHeaders()

    try {
      const req = await axios.get(`${API_URL}${endpoint}`)
      return req.data
    } catch (e) {
      alert(e.response.data)
    }
  },
  async post(endpoint, params) {
    await setHeaders()

    try {
      const req = await axios.post(`${API_URL}${endpoint}`, params)
      return req.data
    } catch (e) {
      alert(e.response.data)
    }
  },
  async put(endpoint, params) {
    await setHeaders()

    try {
      const req = await axios.put(`${API_URL}${endpoint}`, params)
      return req.data
    } catch (e) {
      alert(e.response.data)
    }
  },
  async delete(endpoint) {
    await setHeaders()

    try {
      const req = await axios.delete(`${API_URL}${endpoint}`)
      return req.data
    } catch (e) {
      alert(e.response.data)
    }
  },
}

export default Api
