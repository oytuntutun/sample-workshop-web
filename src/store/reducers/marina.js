const marina = (state = {}, action) => {
  switch (action.type) {
    case 'SET_INITIAL':
      return { loading: false, isAuth: false }


    case 'ADD_MARINA':
      return { ...state, loading: true }

    case 'ADD_MARINA_FAILED':
      return {
        loading: false,
        error: action.payload,
        isAuth: false,
        loginAttempt: false
      }

    case 'ADD_MARINA_SUCCESSFUL':
      return {
        ...state,
        user: action.payload,
        loading: false,
        isAuth: true,
        role: action.payload.role
      }

    case 'GET_MARINAS':
      return {
        marina: action.payload
      }

    case 'DELETE_MARINA':
      return {
        ...state,
        deleted: true
      }

    case 'UPDATE_MARINA':
      return {
        ...state.marina,
        marina: state.marina.map(x => {
          if(x._id === action.payload._id) {
            return {
              ...x.marina,
              ...action.payload
            }
          }
          return x
        })
      }

    default:
      return state
  }
}

export default marina
