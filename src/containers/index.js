import React from 'react'

// redux store
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../store'

// router
import { BrowserRouter as Router } from 'react-router-dom'

import Navigator from './Auth'

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <Navigator />
      </Router>
    </PersistGate>
  </Provider>
)

export default Root
