import Api from '../../../lib/api'

const addMarina = payload => {
  return async dispatch => {
    const res = await Api.post('/marinas/addMarina', payload)
    if (!res) return

    dispatch({
      type: 'ADD_MARINA',
      payload
    })
  }
}

export default addMarina
