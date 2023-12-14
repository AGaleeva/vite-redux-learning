import styled from "styled-components";

interface ButtonComponentProps {
  $isRedFont?: boolean | undefined;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`  
  width: 100%;
  min-height: 50px;
  height: fit-content;
  padding: 6px 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.disabled ? 'grey' : 'rgb(54, 120, 180)'}; // = background-color: ${({disabled}) => disabled ? 'grey' : 'blue'}
  color: ${({$isRedFont}) => $isRedFont ? 'red' : 'white'};  
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;  
  font-weight: bolder;
`;