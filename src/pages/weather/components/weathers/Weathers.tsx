import { useDispatch, useSelector } from 'react-redux';
import WeatherInfo from 'pages/weather/components/weatherInfo';
import { AppDispatch } from 'store/store';
import { weatherSelector } from 'store/redux/weather/selectors';
import { WeatherCard } from 'store/redux/weather/types';
import { WeatherButtonContainer, WeatherCardsContainer } from './styles';
import { weatherActions } from 'store/redux/weather/weatherSlice';
import WeatherButton from 'pages/weather/components/weatherButton';

function Weathers() {
  const dispatch: AppDispatch = useDispatch()
  const { weatherCard, weatherCardsArray, error, isLoading } = useSelector(weatherSelector)

  return (
    <>
      <WeatherCardsContainer>
        {weatherCardsArray.map((weatherCard: WeatherCard) => (
          <WeatherInfo
            key={weatherCard.id}
            temp={weatherCard.temp}
            cityName={weatherCard.cityName}
            icon={weatherCard.icon}
            isShowOnlyDeleteButton={true}
            onDelete={() =>
              dispatch(weatherActions.deleteWeatherCard(weatherCard.id))
            }
          />
        ))}
      </WeatherCardsContainer>
      {weatherCardsArray.length > 0 && (
        <WeatherButtonContainer>
          <WeatherButton
            name="Delete all weather cards"
            onClick={() => {
              dispatch(weatherActions.removeAllWeatherCard())
            }}
          />
        </WeatherButtonContainer>
      )}
    </>
  )
}

export default Weathers;