import styled from "styled-components";
import { colors } from "styles/colors";

export const UsersWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: stretch;  
  gap: 40px;
  flex-wrap: wrap;
`;

export const Card = styled.ul`  
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 500px;  
  width: 400px;
  height: fit-content;
  /* height: fit-content; */
  padding: 30px;
  overflow-wrap: break-word;
  border: 2px solid ${colors.primary};
  border-radius: 8px;
  color: ${colors.primary};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bolder;  
`;

// Как показать точеки, когда текст длинный
// 1.Задаете главному контейнеру фиксированную ширину, например 300px
// 2. Добавляете св-ва тексту: width: 100%;
//   text-overflow: ellipsis; - показывает точки 
//   overflow: hidden; - скрывает текст что не влез

// Если вы хотите перенносить текст на другие строки, то добавьте вашему тегу с текстом след св-во:
// overflow-wrap: break-word;