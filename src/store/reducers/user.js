const user = (state = {experiences: []}, action) => {
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
        ...action.payload ,
        loading: false,
      }

    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experience: [action.payload, ...state.experience]
      };

    case 'DELETE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.filter(
          experience => experience._id !== action.payload
        )
      }

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
