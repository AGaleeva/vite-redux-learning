import styled from "styled-components";

export const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;  
  gap: 40px;
  padding-top: 30px;
  padding-left: 30px;
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;    
  min-width: 500px;
  width: fit-content;
  height: fit-content;  
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: black;
`;

export const ButtonContainer = styled.div`
  width: fit-content;  
`;

export const CreatedListContainer = styled.div`
  padding: 10px 15px;
  width: 500px;
  min-height: 300px;
  border: 1px solid black;
  border-radius: 8px;
  `;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  min-height: 280px;
  height: fit-content;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: black;
    & li {
      cursor: pointer;
    }
  `;

