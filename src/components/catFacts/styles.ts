import styled from "styled-components";

export const CatFactsWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 40px;
  `;

export const CatFactsContainer = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;  
  gap: 40px;
  width: 500px;
  height: fit-content;
  padding: 40px;
  border: 1px solid black;
  border-radius: 8px;
`;

export const FactsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  width: 200px;
  align-self: center;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
`;