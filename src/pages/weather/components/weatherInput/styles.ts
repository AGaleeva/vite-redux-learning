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
  color: white;
`;

export const InputComponent = styled.input<InputComponentProps>`  
  width: 100%;
  height: 50px;
  padding: 12px 12px 12px 20px;
  outline: none;   
  border-radius: 40px;
  border: 1px solid #FFF;
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(8px);            
  border: ${({ $error }) => (!!$error ? '1px solid red' : "1px solid #FFF")}; 
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  &::placeholder {
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: fit-content;
  color: red; 
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px; 
`;