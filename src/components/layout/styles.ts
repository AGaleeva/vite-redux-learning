import { Link, NavLink } from 'react-router-dom';
import styled from "styled-components";
import { colors } from 'styles/colors'

export const LayoutWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 10px 30px;
  background-color: ${colors.primary};
  color: ${colors.white};
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;  
`;

export const NavContainerCol = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  color: ${colors.white};
  font-size: 20px;
`;

export const ImgContainer = styled.div`
  width: 50px;
  height: 50px; 
  & img {
    height: 100%;
    width: 100%;
  }   
`;

export const StyledImgLink = styled(NavLink)`
  width: 50px;
  height: 50px;   
`;

export const Main = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 20px;
  color: ${colors.black};
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 20px;
  background-color: ${colors.primary};
  color: ${colors.white};
`;
