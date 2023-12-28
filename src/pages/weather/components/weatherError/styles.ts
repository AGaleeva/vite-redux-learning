import styled from "styled-components";
import { colors } from "styles/colors";

export const WeatherErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 709px;
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

export const ApiError = styled.p`
  display: flex;
  color: #f35e5e;
  font-size: 57px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ErrorMessage = styled.p`
  display: flex;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  color: ${colors.white};
`;

export const WeatherButtonContainer = styled.div`
  width: 150px;
  & button {
    background: none;
    border: 1px solid white;    
  }  
`;