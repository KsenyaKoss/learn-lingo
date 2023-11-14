import styled from "styled-components";

export const HeroStyled = styled.div`
  display: flex;
  gap: 24px;
  max-width: 1312px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledH1 = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: 1, 16;
  letter-spacing: -0.96px;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    font-size: 24px
  }
`;

export const SpanStyled = styled.span`
  background-color: ${({ color }) =>
    color === "blue"
      ? "var(--blue)"
      : color === "green"
      ? "var(--green)"
      : color === "orange"
      ? "var(--orange)"
      : color === "pink"
      ? "var(--pink)"
      : color === "lightPink"
      ? "var(--light-pink)"
      : "var(--secondary-text-color)"};
  width: 195px;
  height: 40px;
  border-radius: 8px;
  font-style: italic;
  font-weight: 500;
`;




export const PStyled = styled.p`
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: -0.32px;
  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const HeroTextStyled = styled.div`
  width: 720px;
  max-height: 530px;
  background-color: var(--secondary-bgr-color);
  border-radius: 30px;
  padding: 98px 64px;
  text-align: left;
`;

export const ImgWrp = styled.div`
  width: 568px;
  height: 530px;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    width: 368px;
  }
`;

export const StyledImg = styled.img``;

export const MainButtonStyled = styled.button`
  display: inline-flex;
  padding: 16px 88px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${({ color }) =>
    color === "blue"
      ? "var(--blue)"
      : color === "green"
      ? "var(--green)"
      : color === "orange"
      ? "var(--orange)"
      : color === "pink"
      ? "var(--pink)"
      : color === "lightPink"
      ? "var(--light-pink)"
      : "var(--secondary-text-color)"};;
  border: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55;
  cursor: pointer;
  transition: var(--hover-transition);

  &:hover {
    background-color: ${({ color }) =>
    color === "blue"
      ? "var(--blue-hover)"
      : color === "green"
      ? "var(--green-hover)"
      : color === "orange"
      ? "var(--orange-hover)"
      : color === "pink"
      ? "var(--pink-hover)"
      : color === "lightPink"
      ? "var(--light-pink-hover)"
      : "var(--secondary-text-color)"};;
  }


   @media screen and (max-width: 768px) {
    padding: 16px;
    font-size: 14px;
  }
`;
