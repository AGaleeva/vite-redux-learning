import { useLocation } from 'react-router-dom';
import { LayoutProps } from "./types";
import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  NavContainer,
  StyledLink,
  ImgContainer,
  StyledImgLink,
  NavContainerCol,
} from "./styles";
import LogoIcon from '../../assets/github_270798.png';
import { colors } from '../../styles/colors';

function Layout({children}: LayoutProps) {

  const location = useLocation();  

  return (
    <LayoutWrapper>
      <Header>
        <ImgContainer>
          <StyledImgLink to="/">
            <img src={LogoIcon} alt="Logo" />
          </StyledImgLink>
        </ImgContainer>
        <NavContainer>
          <StyledLink
            style={({ isActive }) => ({
              color: isActive ? `${colors.midleBlue}` : "white",
            })}
            to="/"
          >
            Home
          </StyledLink>
          <StyledLink
            style={({ isActive }) => ({
              color: isActive ? `${colors.midleBlue}` : "white",
            })}
            to="/users"
          >
            Users
          </StyledLink>                  
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <NavContainerCol>
          <StyledLink style={({ isActive }) => ({
              color: isActive ? `${colors.midleBlue}` : "white",
            })} to={"/"}>Home</StyledLink>
          <StyledLink style={({ isActive }) => ({
              color: isActive ? `${colors.midleBlue}` : "white",
            })} to={"/users"}>Users</StyledLink>          
        </NavContainerCol>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;

