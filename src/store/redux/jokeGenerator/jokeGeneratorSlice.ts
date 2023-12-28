import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import {JokeData, JokeGeneratorState} from './types'

const jokeGeneratorInitialState: JokeGeneratorState = {
  data: null, // здесь хранятся успешно пришедшие данные ответа на запрос
  error: null, // здесь хранятся данные об ошибке при ответе на запрос
  isLoading: false // это индикатор загрузки данных  
}

// Создается асинхронный middleware функция Thunk через createAsyncThun

export const getJoke = createAsyncThunk('JOKE_GENERATOR/getJoke', async () => {
  // делаем get-запрос на сервер  
  const response = await fetch('https://official-joke-api.appspot.com/random_joke')

  // В result будет лежать либо успешно переданные данные, либо ошибка  
  const result = await response.json()

  return result
})

const jokeGeneratorSlice = createSlice({
  name: 'JOKE_GENERATOR',
  initialState: jokeGeneratorInitialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
    .addCase(getJoke.pending, (state: JokeGeneratorState) => {
      state.data = null
      state.error = null
      state.isLoading = true
    })
    .addCase(getJoke. fulfilled, (state: JokeGeneratorState, { payload }: PayloadAction<JokeData>) => {
      state.isLoading = false
      state.data = payload
    })
    .addCase(getJoke.rejected, (state: JokeGeneratorState, {payload}: PayloadAction<any>) => {
      state.isLoading = false
      state.error = payload
    })
  }
})

export const jokeGeneratorActions = jokeGeneratorSlice.actions;
export const jokeGeneratorReducers = jokeGeneratorSlice.reducer;