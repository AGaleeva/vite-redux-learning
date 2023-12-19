import styled from "styled-components";
import { colors } from "styles/colors";

export const UsersWrapper = styled.div`
  display: flex;
  align-items: flex-start;  
  gap: 40px;
  flex-wrap: wrap;
`;

export const Card = styled.ul`  
  width: fit-content;
  height: fit-content;
  padding: 20px;
  border: 2px solid ${colors.primary};
  border-radius: 8px;
  color: ${colors.primary};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bolder;
  line-height: 1.7rem;
`;