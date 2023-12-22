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


//const weatherInitialState: WeatherInitialState = {
//   weatherCard: {id: 'someId', temp:"13deg", city: "Berlin", icon: "iconURL"}
//   weatherCardsArray: [{id: 'someId', temp:"13deg", city: "Berlin", icon: "iconURL"}, {id: 'someId', temp:"13deg", city: "Berlin", icon: "iconURL"}],
//   error: null,
//   isLoading: false,
// }