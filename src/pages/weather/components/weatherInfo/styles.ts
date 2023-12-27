import styled from "styled-components";
import { colors } from "styles/colors";

export const MainWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  width: 100%;
  height: 220px;
  padding: 16px 30px;
  background: linear-gradient(
    134deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(4px);
  border-radius: 20px;
`;

export const WeatherInfoWrapper = styled.div`
  display: flex;  
`;

export const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;
  width: 100px;
  height: 100%;
  margin-left: 30px;
  color: ${colors.white};
`;

export const Temp = styled.p`
font-family: Arial, Helvetica, sans-serif;
font-size: 57px;
font-weight: 500;
`;

export const CityName = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ButtonsBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  gap: 100px;
  width: 440px;
`;

export const WeatherButtonContainer = styled.div`
  width: 150px;
  & button {
    background: none;
    border: 1px solid white;    
  }  
`;

