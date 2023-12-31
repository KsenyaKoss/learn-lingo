import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const StyledNavigation = styled.div`
width:1220px;
display: flex;
/* margin-top: 20px; */
gap: 28px;
align-items: center;
justify-content: center;



`

export const NavLinkStyled = styled(NavLink)`
font-size: 16px;
font-weight: 400;
line-height: calc(20 / 16);
transition: transform var(--hover-transition);

&.active {
    color: var(--orange);
    text-decoration: underline;
}

&:hover {
    transform: scale(1.1);
}


`