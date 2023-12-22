import { createSlice, AsyncThunk, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import  {WeatherState, WeatherCard } from './types'
import { v4 } from 'uuid';

const emptyWeatherCard: WeatherCard = {
  id: '',
  temp: '',
  cityName: '',
  icon: ''
};

const weatherInitialState: WeatherState = {
weatherCard: undefined,
weatherCardsArray: [],
error: undefined,
isLoading: false,
}


export const getWeatherInfo = createAsyncThunk(
  'WEATHER_APP/getWeatherInfo',
  async (city: string, { rejectWithValue }) => {
    const APP_ID: string = "e6393aad6b894d00cd609e72c2eaa034";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`)
    const result = await response.json()
    if (!response.ok) {
      return rejectWithValue(result);
    }
    return result
  }
)

const weatherSlice = createSlice({
  name: 'WEATHER_APP',
  initialState: weatherInitialState,
  reducers: {
    addWeatherCard: (state: WeatherState) => {
      if(state.weatherCard){
      state.weatherCardsArray = [...state.weatherCardsArray, state.weatherCard]
      state.weatherCard = undefined}
    },
    clearWeatherCard: (state: WeatherState)=> {state.weatherCard = undefined},
    deleteWeatherCard: (state: WeatherState, { payload }: PayloadAction<string>) => {
      state.weatherCardsArray = [...state.weatherCardsArray].filter((weatherCard: WeatherCard) => weatherCard.id !== payload)
    },
    removeAllWeatherCard: (state: WeatherState) => {state.weatherCardsArray = []},
    deleteErrorCard: (state: WeatherState) => {state.error = undefined}
  },
  extraReducers: (builder) => {
    builder
    .addCase(getWeatherInfo.pending, (state: WeatherState) => {
      state.weatherCard = undefined
      state.error = undefined
      state.isLoading = true
    })
    .addCase(getWeatherInfo.fulfilled, (state: WeatherState, { payload }: PayloadAction<any>) => {
      // console.log(payload);
      state.weatherCard = undefined
      state.isLoading = false    
      state.weatherCard = {id: v4(), temp: `${(payload.main.temp - 273.15).toFixed()}º`, cityName: payload.name, icon: payload.weather[0].icon}
    })
    .addCase(getWeatherInfo.rejected, (state: WeatherState, { payload }: PayloadAction<any>) => {
      state.isLoading = false
      state.error = payload
    })
  }
})

export const weatherActions = weatherSlice.actions;
export const weatherReducers = weatherSlice.reducer;