import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

// defaults to AsyncStorage
import storage from 'redux-persist/lib/storage'

// import reducers
import user from './reducers/user'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: hardSet,
  timeout: null
}

const rootReducer = combineReducers({
  user
})

const pReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = createStore(pReducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
))


export const persistor = persistStore(store)
