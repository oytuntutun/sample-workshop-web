import axios from 'axios'
import Api from '../../../lib/api'

export const login = payload => {
  return dispatch => {
    // before the request starts
    dispatch(loginStarted())
    // send request
    axios
      .post('http://localhost:4000/users/login', payload) // payload contains email and password
      .then(res => {
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

export const saveInformation = payload => {
  return async dispatch => {
    const res = await Api.put('/users/addBasicInfo',  payload)
    if (!res) return

    dispatch({
      type: 'START_REQUEST',
      payload
    })
  }
}

export const addExperience = payload => {
  console.log('add XP reducer',payload)
  return async dispatch => {
    const res = await Api.post('/users/addExperience', payload)
    console.log('res',res.user)
    if(!res) return

    dispatch({
      type: 'ADD_EXPERIENCE',
      payload
    })
  }
};

export const deleteExperience = payload => {
  return async dispatch => {
    const res = await Api.delete('/users/deleteExperience',  {id: payload})
    if (!res) return

    dispatch({
      type: 'DELETE_EXPERIENCE',
      payload
    })
  }
}

export const editExperience = payload => {
  return async dispatch => {
    const res = await Api.put('/users/editExperience',  payload)
    console.log('delete exp', res)
    if (!res) return

    dispatch({
      type: 'EDIT_EXPERIENCE',
      payload
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
