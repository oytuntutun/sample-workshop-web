import axios from 'axios'
import { getToken } from './'
import { store } from '../store'

// const API_URL = 'http://192.168.0.102:4000'
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
  async get(endpoint) {
    await setHeaders()

    try {
      const req = await axios.get(`${API_URL}${endpoint}`)
      return req.data
    } catch (e) {
      store.dispatch({
        type: 'HANDLE_RES',
        payload: {err: e && e.response ? e.response.data : 'Something went wrong!' } //
      })
    }
  },
  async post(endpoint, params) {
    await setHeaders()

    try {
      const req = await axios.post(`${API_URL}${endpoint}`, params)
      return req.data
    } catch (e) {
      store.dispatch({
        type: 'DELETE_MARINA',
        payload: { err: e && e.response ? e.response.data : 'Something went wrong!' }
      })
    }
  },
  async put(endpoint, params) {
    await setHeaders()

    try {
      const req = await axios.put(`${API_URL}${endpoint}`, params)
      return req.data
    } catch (e) {
      store.dispatch({
        type: 'HANDLE_RES',
        payload: { err: e && e.response ? e.response.data : 'Something went wrong!' }
      })
    }
  },
  async delete(endpoint, params) {
    await setHeaders()

    try {
      const req = await axios.delete(`${API_URL}${endpoint}`, params)
      return req.data
    } catch (e) {
      store.dispatch({
        type: 'DELETE_MARINA',
        payload: { err: e && e.response ? e.response.data : 'Something went wrong!' }
      })
    }
  },
}

export default Api
