'use-client';

import { createSlice } from '@reduxjs/toolkit';

// import { StoryType } from '../../Types';

const initialState : any = {
  open: false,
  severity: 'info'
};

export const mainAlertSlice = createSlice({
  name: 'mainAlert',
  initialState,
  reducers: {
    setState: (state, action) => ({...initialState, ...state, ...action.payload})
  },
})

export const { setState } = mainAlertSlice.actions

export default mainAlertSlice.reducer