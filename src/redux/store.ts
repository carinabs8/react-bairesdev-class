import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { newYorkReducer, requestDetailedStoryFormReducer, mainAlertReducer } from './reducers';

const rootReducer = combineReducers({
  newYorkReducer, requestDetailedStoryFormReducer, mainAlertReducer
});

export default configureStore({
  reducer: rootReducer
});