import WeatherButton from 'pages/weather/components/weatherButton'
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
