import WeatherButton from "../weatherButton"
import { ApiError, ErrorMessage, WeatherButtonContainer, WeatherErrorWrapper } from "./styles"
import { WeatherErrorProps } from "./types"

function WeatherError({ code, message, onDelete }: WeatherErrorProps) {
  console.log(code, message)

  return (
    <WeatherErrorWrapper>
      <ApiError>API Error:{code}</ApiError>
      <ErrorMessage>{message}</ErrorMessage>
      <WeatherButtonContainer>
        <WeatherButton
          name="Delete"          
          onClick={onDelete}
        />
      </WeatherButtonContainer>
    </WeatherErrorWrapper>
  )
}

export default WeatherError
