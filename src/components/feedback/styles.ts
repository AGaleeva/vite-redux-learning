import styled from "styled-components";

import {colors} from 'styles/colors'

export const FeedbackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 40px;
  min-width: 400px;
  height: fit-content;
  background-color: ${colors.primary};
`;

export const Count = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border: 1px solid ${colors.midleBlue};
  border-radius: 8px;
  background-color: #fff;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const ButtonContainer = styled.div`
  width: fit-content;
`;

export const ImgContainer = styled.div`
  width: 50px;
  height: 50px; 
  & img {
    height: 100%;
    width: 100%;
  }   
`;