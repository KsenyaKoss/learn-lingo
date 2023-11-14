import { useLocation } from "react-router-dom";
import { NavLinkStyled, StyledNavigation } from "./NavigationStyled";
import useAuth from "../../hooks/use-auth";

const Navigation = () => {
  const { isAuth } = useAuth();
  const location = useLocation();
  return (
    <StyledNavigation>
      <NavLinkStyled to="/" className={location.pathname === ('/') && 'active'}>Home</NavLinkStyled>
      <NavLinkStyled to="teachers" className={location.pathname.includes('/teachers') && 'active'}>Teachers</NavLinkStyled>
      {isAuth && <NavLinkStyled to="favorites" className={location.pathname.includes("/favorites") && 'active'}>Favorites</NavLinkStyled>}
    </StyledNavigation>
  );
};

export default Navigation;
