import io from 'socket.io-client'
import getToken from 'app/lib/getToken'
import getInitialData from 'actions/getInitialData'

const API_URL = 'http://localhost:4000'

let socket, connectedOnce = false

const wsMiddleware = ({ getState, dispatch }) => next => async action => {
  const { type, payload } = action
  const state = getState({})

  // run this only if it didn't run before
  // otherwise it will run these multiple times on each redux action
  // just a simple JS trick with a var above
  if(socket && !connectedOnce) {
    connectedOnce = true
  }

  switch (type) {
    case 'WS_CONNECT':
      socket = io(API_URL, {
        'query': 'token=' + await getToken()
      })

      // dispatch(getInitialData())
      break

    case 'WS_DISCONNECT':
      socket.disconnect()
      socket = null
      connectedOnce = false
      console.log('DCED from WS')
      break

    default:
      break
  }

  next(action)
}

export default wsMiddleware
