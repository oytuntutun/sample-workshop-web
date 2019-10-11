const user = (state = {}, action) => {
  const { payload } = action

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state.user,
        ...payload
      }

    case 'LOGOUT':
      return {}

    default:
      return state
  }
}

export default user
