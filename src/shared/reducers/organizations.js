const organizations = (state = [], { type, payload }) => {
  switch(type) {
    case 'ADD_ORGANIZATION':
      return [...state, payload]
    case 'REMOVE_ORGANIZATION':
      return state.filter(x => x.id !== payload)
    case 'UPDATE_ORGANIZATION':
      const idx = state.findIndex(x => x.id === payload.id)
      let newState = [...state]
      newState[idx] = payload
      return newState
    default:
      return state
  }
}

export default organizations