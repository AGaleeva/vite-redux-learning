import styled from "styled-components";

export const JokeGeneratorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 40px;
  `;

export const JokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 500px;
  height: fit-content;
  padding: 40px;
  border: 1px solid black;
  border-radius: 8px;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;