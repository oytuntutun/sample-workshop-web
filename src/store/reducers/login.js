const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_INITIAL':
      return {
        ...state,
        loading: false,
        isAuth: false,
        experiences: []
       }


    case 'LOGIN_STARTED':
      return { loading: true, isAuth: false }

    case 'LOGIN_FAILED':
      return {
        ...state,
        error: action.payload,
        loading: false,
        isAuth: false,
        loginAttempt: false
      }

    case 'START_REQUEST':
      return {
        ...state,
        ...action.payload.payload ,
        loading: false,
      }

    case 'ADD_EXPERIENCE':
    console.log(state)
      return {
        ...state,
        experiences: [action.payload, ...state.experience]
      };

    case 'LOGIN_SUCCESSFUL':
      return {
        ...state,
        ...action.payload.user,
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
