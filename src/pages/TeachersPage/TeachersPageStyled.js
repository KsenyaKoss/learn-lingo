import styled from "styled-components";


export const StyledPage = styled.div`
background-color: var(--secondary-bgr-color);
min-height: 100vh;
height: 100% ;
display: flex;
flex-direction: column;
gap: 32px;
padding: 0 128px;
`

export const StyledButton = styled.button`
display: inline-flex;
margin: 64px auto;
padding: 16px 48px;
justify-content: center;
align-items: center;
border-radius: 12px;
background: var(--orange);
border: none;
outline: none;
cursor: pointer;
font-size: 18px;
font-weight: 700;
line-height: calc(28 / 18);
transition: var(--hover-transition);

&:hover {
    background-color: var(--orange-hover);
}

`