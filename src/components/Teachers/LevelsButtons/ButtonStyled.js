import styled from "styled-components";

export const LevelButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 35px;
  background-color: transparent;
  border: 1px solid rgba(18, 20, 23, 0.2);
  transition:  var(--hover-transition);

  &:hover {
    background-color: var(--orange);
    border-color: transparent;
  }
`;
