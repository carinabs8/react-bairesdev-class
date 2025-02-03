import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { newYorkReducer } from './reducers';

const rootReducer = combineReducers({
  newYorkReducer
});

export default configureStore({
  reducer: rootReducer
});