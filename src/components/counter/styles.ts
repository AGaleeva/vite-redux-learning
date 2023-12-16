import styled from "styled-components";

import {colors} from 'styles/colors'

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 40px;
  min-width: 400px;
  height: fit-content;
  background-color: ${colors.primary};
`;

export const Count = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.white};
`;