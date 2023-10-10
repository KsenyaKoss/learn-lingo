import styled from "styled-components";

export const StyledList = styled.ul`
/* max-width: 1312px; */
display: flex;
gap: 100px;
align-items: center;
justify-content: center;
border-radius: 30px;
border: 1.5px dashed var(--orange);
margin-top: 24px;
padding: 40px ;

`

export const StyledItem = styled.li`
display: flex;
gap: 16px;
align-items: center;

`

export const StyledQuantity = styled.span`
font-size: 28px;
font-weight: 500;
line-height: 1.14; 
letter-spacing: -0.56px;
`

export const StyledTitle = styled.span`
width: 96px;
font-size: 14px;
text-align: left;
color: var(--secondary-text-color);
line-height: 1,28px; 
letter-spacing: -0.28px;

`