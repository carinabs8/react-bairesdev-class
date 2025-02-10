'use-client';

import { createSlice } from '@reduxjs/toolkit';

// import { StoryType } from '../../Types';

const initialState : any = {
  title: null,
  userName: null,
  userEmail: null
};

export const requestDetailedStoryFormSlice = createSlice({
  name: 'requestDetailedStoryForm',
  initialState,
  reducers: {
    setState: (state, action) => ({...initialState, ...state, ...action.payload})
  },
})

export const { setState } = requestDetailedStoryFormSlice.actions

export default requestDetailedStoryFormSlice.reducer