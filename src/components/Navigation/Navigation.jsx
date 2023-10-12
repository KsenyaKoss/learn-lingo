import { NavLink } from "react-router-dom";
import { StyledNavigation } from "./NavigationStyled";
import useAuth from "../../hooks/use-auth";

const Navigation = () => {
  const { isAuth } = useAuth();
  console.log(isAuth);
  return (
    <StyledNavigation>
      <NavLink to="/">Home</NavLink>
      <NavLink to="teachers">Teachers</NavLink>
      {isAuth && <NavLink to="favorites">Favorites</NavLink>}
    </StyledNavigation>
  );
};

export default Navigation;
