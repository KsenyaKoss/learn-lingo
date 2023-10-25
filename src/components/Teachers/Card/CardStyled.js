import styled from "styled-components";

export const CardWrp = styled.div`
  display: flex;
  gap: 48px;
  padding: 24px;
  border-radius: 24px;
  background-color: var(--main-bgr-color);
  margin: 0 auto;
`;

export const ImgWrp = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid var(--orange);
  background-color: var(--main-bgr-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgStyled = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 50%;
`;

export const NameWrp = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`
export const UpperWrp = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
`

export const StyledUpperList = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledItem = styled.li`
  padding-right: 16px;
  border-right: 1px rgba(18, 20, 23, 0.2);
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ButtonLikeStyled = styled.button`
/* margin-left: 64px; */
background-color: transparent;
display: flex;
align-items: center;
justify-content: center;
border: none;
outline: none;
cursor: pointer;
transition: transform var(--hover-transition);

&:hover {
    transform: scale(1.1);
}

`

export const TextContainer = styled.div`
flex-grow: 1;
  width: 968px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const MainInfoWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const LevelListWrp = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`;

export const NameStyled = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: calc(24 / 24);
`;
export const InfoTitle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(24 / 24);
  color: var(--secondary-text-color);
`;
export const InfoStyled = styled.span`
  color: var(--main-text-color);

  &.languages {
    text-decoration: underline;
  }
`;

export const ReadMoreButton = styled.button`
margin-right: auto;
font-size: 16px;
font-weight: 500;
line-height: calc(24 / 16); 
text-decoration-line: underline;
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
`

export const ButtonTrialLessonStyled = styled.button`
display: flex;
max-width: 232px;
padding: 16px 48px;
justify-content: center;
align-items: center;
border-radius: 12px;
background: var(--orange);
font-size: 18px;
font-weight: 700;
line-height: calc(28 / 18); 
outline: none;
border: none;
cursor: pointer;
transition: var(--hover-transition);

&:hover {
  background-color: var(--orange-hover);
}

`
