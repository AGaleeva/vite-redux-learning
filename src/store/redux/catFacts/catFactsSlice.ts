import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { CatFactsState, CatFact, CatFactsResponceData } from './types'
import { v4 } from 'uuid';

const catFactsInitialState: CatFactsState = {
  data: [],
  error: null,
  isLoading: false  
}

export const getCatFact = createAsyncThunk(
  'CAT_FACTS/getCatFact', 
  async () => {
  const response = await fetch('https://catfact.ninja/fact')
  const result = await response.json()
  return result
})

const catFactsSlice = createSlice({
  name: 'CAT_FACTS',
  initialState: catFactsInitialState,
  reducers: {
    deleteCatFact: (state: CatFactsState, { payload }: PayloadAction<string>) => {
      state.data = [...state.data].filter((catFact: CatFact) => catFact.id !== payload)
    },
    removeAllCatFacts: () => catFactsInitialState
  },
  extraReducers: (builder) => {
    builder
    .addCase(getCatFact.pending, (state: CatFactsState) => {
      state.error = null
      state.isLoading = true
    })
    .addCase(getCatFact.fulfilled, (state: CatFactsState, { payload }: PayloadAction<CatFactsResponceData>) => {
      state.isLoading = false
      state.data = [...state.data, {fact: payload.fact, id: v4()}]
    })
    .addCase(getCatFact.rejected, (state: CatFactsState, { payload }: PayloadAction<any>) => {
      state.isLoading = false
      state.error = payload
    })
  }
})

export const catFactsActions = catFactsSlice.actions;
export const catFactsReducers = catFactsSlice.reducer;