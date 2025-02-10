import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { newYorkReducer, requestDetailedStoryFormReducer } from './reducers';

const rootReducer = combineReducers({
  newYorkReducer, requestDetailedStoryFormReducer
});

export default configureStore({
  reducer: rootReducer
});