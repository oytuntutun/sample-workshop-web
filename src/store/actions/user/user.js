import axios from 'axios'

export const login = payload => {
  return dispatch => {
    // before the request starts
    dispatch(loginStarted())
    // send request
    axios
      .post('http://localhost:4000/users/login', payload) // payload contains email and password
      .then(res => {
        console.log('serverData', res.data)
        dispatch(loginSuccessful(res.data)) // res.data is user data


        // set JWT to device storage
        localStorage.setItem('token', res.data.token)
      })
      .catch(err => {
        console.log('error',err)
        dispatch(loginFailed(err))
      })
  }
}

export const setInitial = () => {
  return {
    type: 'SET_INITIAL'
  }
}

export const loginStarted = () => {
  return {
    type: 'LOGIN_STARTED'
  }
}

export const loginSuccessful = payload => {
  // localStorage.setItem('token', payload.token)
  console.log('payload',payload)
  return {
    type: 'LOGIN_SUCCESSFUL',
    payload
  }
}

export const loginFailed = payload => {
  return {
    type: 'LOGIN_FAILED',
    payload
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
