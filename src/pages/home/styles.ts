import styled from "styled-components";
import { colors } from "styles/colors";

export const HomePageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;  
  gap: 20px;
  padding: 20px;
  min-width: 500px;
  height: fit-content;
  border-radius: 8px;
  border: 1px solid black;
`;

export const UserFormName = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: ${colors.midleBlue};
`;