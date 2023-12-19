import styled from "styled-components";

export const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;  
  gap: 40px;
`;

export const InputContainer = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  min-width: 500px;
  width: fit-content;
  height: fit-content;  
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: black;
`;

export const ButtonContainer = styled.div`
  width: fit-content;
  margin-left: 30px;
`;

export const CreatedListContainer = styled.div`
  margin-left: 30px;
  width: 500px;
  min-height: 300px;
  border: 1px solid black;
  border-radius: 8px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: black;
`;