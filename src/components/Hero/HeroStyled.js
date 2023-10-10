import styled from "styled-components";


export const HeroStyled = styled.div`
display: flex;
gap: 24px;
width: 1312px;
align-items: center;
justify-content: center;
`

export const StyledH1 = styled.h1`
font-weight: 500;
font-size: 48px;
line-height: 1,16;
letter-spacing: -0.96px;
margin-bottom: 32px;

`

export const SpanStyled = styled.span`
background-color: var(--secondary-text-color);
width: 195px;
height: 40px;
border-radius: 8px;
font-style: italic;
font-weight: 500;

`
export const PStyled = styled.p`
font-size: 16px;
line-height: 1.38; 
letter-spacing: -0.32px;
margin-bottom: 64px;


`


export const HeroTextStyled = styled.div`
max-width: 720px;
max-height: 530px;
background-color: var(--secondary-bgr-color);
border-radius: 30px;
padding: 98px 64px;
text-align: left;

` 

export const ImgWrp = styled.div`
max-width: 568px;
max-height: 530px;
flex-shrink: 0;
`

export const MainButtonStyled = styled.button`
display: inline-flex;
padding: 16px 88px;
justify-content: center;
align-items: center;
border-radius: 12px;
background: var(--secondary-text-color);
border: none;
font-size: 18px;
font-weight: 700;
line-height: 1.55;
cursor: pointer;
transition: var(--hover-transition);

&:hover {
    background-color: var(--green-hover);
}

`