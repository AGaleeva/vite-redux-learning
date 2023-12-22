import WeatherButton from "../weatherButton"
import { ApiError, ErrorMessage, WeatherErrorWrapper } from "./styles"
import { WeatherErrorProps } from "./types"

function WeatherError({ code, message, onDelete }: WeatherErrorProps) {
  console.log(code, message)

  return (
    <WeatherErrorWrapper>
      <ApiError>API Error:{code}</ApiError>
      <ErrorMessage>{message}</ErrorMessage>
      <WeatherButton
        name="Delete"
        style={{ background: "none", border: "1px solid white" }}
        onClick={onDelete}
      />
    </WeatherErrorWrapper>
  )
}

export default WeatherError
