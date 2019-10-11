import Api from '../../../lib/api'

const updateMarina = payload => {
  return async dispatch => {
    const res = await Api.put('/marinas/updateMarina', payload)
    if(!res) return

    dispatch({
      type: 'UPDATE_MARINA',
      payload
    })
  }
}

export default updateMarina
