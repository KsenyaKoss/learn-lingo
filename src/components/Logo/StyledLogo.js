import styled from "styled-components";

export const LogoStyled = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(24 / 20);
  letter-spacing: -0.4px;
  transition: var(--hover-transition);

  &:hover p {
    transform: scale(1.05);
  }
`;

export const StyledImg = styled.img`

`

export const StyledP = styled.p`
transition: var(--hover-transition);
`