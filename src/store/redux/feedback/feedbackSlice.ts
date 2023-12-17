import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FeedbackInitialStates } from './types'

const feedbackInitialStates: FeedbackInitialStates = {
  likes: 0,
  dislikes: 0
}

const feedbackSlice = createSlice({
  name: 'FEEDBACK',
  initialState: feedbackInitialStates,
  reducers: {

    plusLikes: (state: FeedbackInitialStates) => {
      state.likes += 1
    },

    plusDislikes: (state: FeedbackInitialStates) => {
      state.dislikes += 1
    },

    resetResults: (state: FeedbackInitialStates) => feedbackInitialStates
    // {
    //   state.likes = 0
    //   state.dislikes = 0      
    // }
  }
})

export const actions = feedbackSlice.actions;
export const feedbackReducer = feedbackSlice.reducer;