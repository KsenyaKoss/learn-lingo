import styled from "styled-components";
import { FiLogIn, FiLogOut } from 'react-icons/fi'

export const StyledHeader = styled.div`
max-width: 1184px;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px;
margin-left: auto;
margin-right: auto;
`


export const AuthButtons = styled.div`
display: flex;
gap: 16px;
align-items: center;
`

export const RegistrationButtonStyled = styled.button`
max-width: 166px;
padding: 14px 39px;
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
font-weight: 700;
line-height: calc(20 / 16); 
background-color: var(--main-text-color);
color: var(--main-bgr-color);
border-radius: 12px;
outline: none;
cursor: pointer;
transition: transform var(--hover-transition);

&:hover {
   transform: scale(1.05);
}
`

export const LogInButtonStyled = styled.button`
padding-top: 14px;
padding-bottom: 14px;
display: flex;
gap: 8px;
align-items: center;
justify-content: center;
outline: none;
border: none;
cursor: pointer;
background-color: transparent;
font-size: 16px;
font-weight: 700;
line-height: calc(20 / 16); 
transition: transform var(--hover-transition);

&:hover,
&:hover .icon {
   transform: scale(1.05);
}

`

export const StyledIconLogin = styled(FiLogIn)`
color: var(--orange);
font-size: 1.5rem;
`

export const StyledIconLogout = styled(FiLogOut)`
color: var(--orange);
font-size: 1.5rem;
`