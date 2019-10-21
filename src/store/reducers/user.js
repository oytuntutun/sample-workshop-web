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

    case 'EDIT_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.map(x => {
          // check if its the experience we edited
          if (x._id === action.payload._id) {
            // edit the x with new values
            return {
              ...x, // spread the current experience values,
              ...action.payload // spread the new values. the values will overwrite values of the already spread ...x
            };
          }
          // it was not the experience we edited
          return x; // return it as it is, without changing
        })
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
