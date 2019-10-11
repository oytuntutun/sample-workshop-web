import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
// defaults to localstorage on web, AsyncStorage on react-native
import storage from 'redux-persist/lib/storage'

// import other reduxers
import user from './reducers/user'
import organizations from './reducers/organizations'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: hardSet
}

const rootReducer = combineReducers({
  user,
  organizations
})

const pReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = createStore(
  pReducer,
  applyMiddleware(thunk)
)
export const persistor = persistStore(store)
