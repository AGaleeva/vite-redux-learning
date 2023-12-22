import WeatherButton from "../weatherButton"
import { ButtonsBlockWrapper, CityName, IconWrapper, MainWeatherWrapper, Temp, TempWrapper, WeatherButtonContainer, WeatherInfoWrapper } from "./styles"

interface WeathersProps {
  temp: string
  cityName: string
  icon: string
  isShowOnlyDeleteButton: boolean,
  onDelete: any,
  onSave?: any,
}

function WeatherInfo ({temp, cityName, icon, isShowOnlyDeleteButton, onDelete, onSave}: WeathersProps) {
  return (
    <MainWeatherWrapper>
      <WeatherInfoWrapper>
        <TempWrapper>
          <Temp>{temp}</Temp>
          <CityName>{cityName}</CityName>
        </TempWrapper>
        <IconWrapper>
          <img
            src={`https://openweathermap.org/img/w/${icon}.png`}
            alt="weatherIcon"
          />
        </IconWrapper>
      </WeatherInfoWrapper>
      <ButtonsBlockWrapper>
        {isShowOnlyDeleteButton ? (
          <WeatherButtonContainer>            
            <WeatherButton
              name="Delete"              
              onClick={onDelete}
            />
          </WeatherButtonContainer>
        ) : (
          <>
            <WeatherButtonContainer>                        
              <WeatherButton
                name="Save"              
                onClick={onSave}
              />
            </WeatherButtonContainer>
            <WeatherButtonContainer>            
              <WeatherButton
                name="Delete"              
                onClick={onDelete}
              />
            </WeatherButtonContainer>
          </>
        )}
      </ButtonsBlockWrapper>
    </MainWeatherWrapper>
  )
}

export default WeatherInfo;



{/* <WeatherInfo temp={weatherData.temp} city=(weatherData.city) и т.д /> */}



//  <WeatherInfo 
// temp={weatherData.temp}
//  city=(weatherData.city)
//  isShowOnlyDeleteButton={true}
//   onDelete={() => {dispatch(weatherActions.deleteWeatherCard(weatherCard.id))}} /> 

//   const weatherInitialState: WeatherInitialState = {
//   weatherCard: {id: 'someId', temp:"13deg", city: "Berlin", icon: "iconURL"}
//   weatherCardsArray: [{id: 'someId', temp:"13deg", city: "Berlin", icon: "iconURL"}, {id: 'someId', temp:"13deg", city: "Berlin", icon: "iconURL"}],
//   error: null,
//   isLoading: false,
// }