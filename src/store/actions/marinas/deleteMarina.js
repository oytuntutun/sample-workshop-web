import Api from '../../../lib/api'

const deleteMarina = payload => {
  return async dispatch => {
    const res = await Api.delete('/marinas/deleteMarina',  {data: {_id: payload}})
    if (!res) return

    dispatch({
      type: 'DELETE_MARINA',
      payload
    })
  }
}

export default deleteMarina
