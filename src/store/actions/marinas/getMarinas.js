import Api from '../../../lib/api'

const getMarinas = payload => {
  return async dispatch => {
    const res = await Api.get('/marinas/getAll',)
    if (!res) return

    dispatch({
      type: 'GET_MARINAS',
      payload: res
    })
  }
}

export default getMarinas
