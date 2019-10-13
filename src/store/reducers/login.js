const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_INITIAL':
      return { loading: false, isAuth: false }


    case 'LOGIN_STARTED':
      return { loading: true, user: null, isAuth: false }

    case 'LOGIN_FAILED':
      return {
        loading: false,
        error: action.payload,
        isAuth: false,
        loginAttempt: false
      }

    case 'START_REQUEST':
      return {
        ...state,
        user: {...action.payload.payload, ...state},
        loading: false,

      }

    case 'LOGIN_SUCCESSFUL':
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        isAuth: true,
        role: action.payload.role
      }

    case 'LOGOUT':
      return {}

    default:
      return state
  }
}

export default user
