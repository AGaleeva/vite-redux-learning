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

function Layout() {

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
          <StyledLink
            style={({ isActive }) => ({
              color: isActive ? `${colors.midleBlue}` : "white",
            })}
            to="/clients"
          >
            Clients
          </StyledLink>
          <StyledLink
            style={({ isActive }) => ({
              color: isActive ? `${colors.midleBlue}` : "white",
            })}
            to="/about"
          >
            About
          </StyledLink>
        </NavContainer>
      </Header>
      <Main></Main>
      <Footer>
        <NavContainerCol>
          <StyledLink style={({ isActive }) => ({
              color: isActive ? `${colors.midleBlue}` : "white",
            })} to={"/"}>Home</StyledLink>
          <StyledLink style={({ isActive }) => ({
              color: isActive ? `${colors.midleBlue}` : "white",
            })} to={"/users"}>Users</StyledLink>
          <StyledLink style={({ isActive }) => ({
              color: isActive ? `${colors.midleBlue}` : "white",
            })} to={"/about"}>About</StyledLink>
          <StyledLink style={({ isActive }) => ({
              color: isActive ? `${colors.midleBlue}` : "white",
            })} to={"/clients"}>Clients</StyledLink>
        </NavContainerCol>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;

