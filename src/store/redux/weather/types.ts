export interface WeatherState {
  weatherCard: WeatherCard | undefined,
  weatherCardsArray: WeatherCard[],
  error: any,
  isLoading: boolean
}

export interface WeatherCard {   
  id: string
  temp: string
  cityName: string
  icon: string
}


