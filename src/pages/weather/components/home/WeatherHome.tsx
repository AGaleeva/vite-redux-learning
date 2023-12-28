import { ChangeEvent, useState } from 'react';

import WeatherInfo from 'pages/weather/components/weatherInfo';
import { InputButtonWrapper, InputInfoCardWrapper, Paragraph, WeatherButtonContainer } from './styles';
import WeatherButton from 'pages/weather/components/weatherButton';
import WeatherInput from 'pages/weather/components/weatherInput';
import { AppDispatch } from 'store/store';
import { useDispatch, useSelector } from 'react-redux';
import { weatherSelector } from 'store/redux/weather/selectors';
import { getWeatherInfo, weatherActions } from 'store/redux/weather/weatherSlice';
import WeatherError from 'pages/weather/components/weatherError';

interface WeatherErrorData {
  code: string
  message: string
}

function WeatherHome() {
  const dispatch: AppDispatch = useDispatch()
  const {weatherCard, weatherCardsArray, error, isLoading} = useSelector(weatherSelector)
  
  const [city, setCity] = useState<string>("")
  const onChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  return (
    <InputInfoCardWrapper>
      <InputButtonWrapper>
        <WeatherInput
          placeholder="Enter city name"
          value={city}
          onChange={onChangeCity}
        />
        <WeatherButtonContainer>
          <WeatherButton
            name="Search"
            onClick={() => {
              dispatch(getWeatherInfo(city))
            }}
          />
        </WeatherButtonContainer>
      </InputButtonWrapper>
      {isLoading && <Paragraph>Loading...</Paragraph>}
      {weatherCard && (
        <WeatherInfo
          temp={weatherCard.temp}
          icon={weatherCard.icon}
          cityName={weatherCard.cityName}
          isShowOnlyDeleteButton = {false}
          onDelete={() => {
            dispatch(weatherActions.clearWeatherCard())
          }}
          onSave={() => {
            dispatch(weatherActions.addWeatherCard())
          }}
        />
      )}
      {error && (
        <WeatherError
          code={error.code}
          message={error.message}
          onDelete={() => {
            dispatch(weatherActions.deleteErrorCard())
          }}
        />
      )}
    </InputInfoCardWrapper>
  )
}

export default WeatherHome;

