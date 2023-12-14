import styled from "styled-components";

interface InputComponentProps {
  $error: string | undefined;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: black;
`;

export const InputComponent = styled.input<InputComponentProps>`  
  width: 100%;
  height: 50px;
  padding: 6px 10px;
  outline: none;  
  border-radius: 4px;  
  background-color: ${({disabled}) => disabled ? 'lightgrey' : 'white'};    
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'default'};    
  border: ${({ $error }) => (!!$error ? '1px solid red' : "1px solid rgba(0, 0, 0, 0.59)")}; 
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: fit-content;
  color: red; 
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px; 
`;