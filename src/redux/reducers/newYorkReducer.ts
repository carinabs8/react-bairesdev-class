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
    setState: (state, action) => ({...state, ...action.payload})
  },
})

export const { setState } = newYorkSlice.actions

export default newYorkSlice.reducer