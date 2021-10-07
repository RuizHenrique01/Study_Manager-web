import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const INITIAL_STATE = {token : ''};

function reducer(state = INITIAL_STATE , action){
    switch (action.type) {
        case 'SET_TOKEN':
          return state = { token : action.token };
        default:
          return state;
      }
}

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer);

const persistor = persistStore(store)

export { store, persistor };