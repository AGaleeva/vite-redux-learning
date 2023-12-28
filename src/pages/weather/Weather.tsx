import { WeatherWrapper, NavContainer, LogoContainer, Header, Main, StyledNavLink } from './styles';
import {WeatherProps} from './types'

function Weather({children}: WeatherProps) {
  return (
    <WeatherWrapper>
      <Header>
        <LogoContainer>Weather App</LogoContainer>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({ fontWeight: isActive ? 700 : 400 })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({ fontWeight: isActive ? 700 : 400 })}
            to="/weathers"
          >
            Weathers
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>
        {children}
      </Main>
    </WeatherWrapper>
  )
}

export default Weather;