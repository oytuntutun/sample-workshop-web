import Api from 'lib/api'

const completeOnboarding = (payload) => {
  return async (dispatch, getState) => {
    const state = getState()
    await Api.put('/users/completeOnboarding', state.user)

    dispatch({
      type: 'SET_USER',
      payload: { boarded: true }
    })
  }
}

export default completeOnboarding
