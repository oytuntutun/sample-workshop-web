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

export const saveInformation = payload => {
  return async dispatch => {
    const res = await Api.put('/data/add',  payload)
    if (!res) return

    dispatch({
      type: 'START_REQUEST',
      payload
    })
  }
}

export const addExperience = payload => {
  console.log('working')
  return async dispatch => {
    const res = await Api.post('/users/addExperience', payload)
    if(!res) return console.log('no res found')
    console.log(res)
    dispatch({
      type: 'ADD_EXPERIENCE',
      payload
    })
  }
};

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

export const editExperience = payload => {
  return {
    type: 'EDIT_EXPERIENCE',
    payload
  };
};

export const deleteExperience = payload => {
  return {
    type: 'DELETE_EXPERIENCE',
    payload
  };
};


export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
