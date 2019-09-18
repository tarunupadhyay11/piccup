import { createStore , applyMiddleware , compose} from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import {AsyncStorage} from "react-native";


const persistConfig = {
    key: 'root',
    storage,
  }

// Middleware: Redux Persist Config
// const persistConfig = {
//   // Root
//   key: 'root',
//   // Storage Method (React Native)
//   storage: AsyncStorage,
//   // Whitelist (Save Specific Reducers)
//   whitelist: [
//     'authReducer',
//   ],
//   // Blacklist (Don't Save Specific Reducers)
//   // blacklist: [
//   //   'counterReducer',
//   // ],
// };
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default function cofigureStore(initialState = {}){
//     return createStore(rootReducer , initialState , applyMiddleware(thunk))
// }

// export const store = createStore(persistedReducer, compose(
//   applyMiddleware(thunk),
//   process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f
// ))

 const store = createStore(persistedReducer, compose(
  applyMiddleware(thunk),
  process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f
))

const persistor = persistStore(store);
//export const persistor = persistStore(store);
//persistor.purge()
// window.persistor = persistor;

export {store,persistor}

// export default ()=>{
//   console.log(store)
//   return {
//     store , persistor
//   }
// }