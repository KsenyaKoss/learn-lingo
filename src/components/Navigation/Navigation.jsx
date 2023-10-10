import { NavLink } from "react-router-dom"
import { StyledNavigation } from "./NavigationStyled"

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='teachers'>Teachers</NavLink>
      <NavLink to='favirites'>Favorites</NavLink>
    </StyledNavigation>
  )
}

export default Navigation
