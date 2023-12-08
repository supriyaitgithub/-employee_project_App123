import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';
import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage: ExpoFileSystemStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['employee'],
};
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  pReducer,
  __DEV__
    ? composeWithDevTools(applyMiddleware(ReduxThunk))
    : applyMiddleware(ReduxThunk),
 );

const persistor = persistStore(store);
export { persistor };
export default store;

//
