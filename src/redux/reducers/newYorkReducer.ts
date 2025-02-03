'use-client';

import { createSlice } from '@reduxjs/toolkit';

import { StoryType } from '../../Types';

const initialState : StoryType = {
  section: '',
  title: '',
  abstract: '',
  des_facet: [],
  multimedia: []
};

export const newYorkSlice = createSlice({
  name: 'newYorkStory',
  initialState,
  reducers: {
    changeState: (state, action) => ({...state, ...action.payload})
  },
})

export const { changeState } = newYorkSlice.actions

export default newYorkSlice.reducer