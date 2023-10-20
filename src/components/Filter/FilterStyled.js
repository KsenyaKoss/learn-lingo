import styled from "styled-components";

export const FilterWrp = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  margin-right: auto;
  padding-top: 10px;
`;
export const OneFilterWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledLabel = styled.label`
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14); /* 128.571% */
`;

export const StyledSelect = styled.select`
  width: 221px;
  display: flex;
  padding: 16px 18px;
  justify-content: space-between;
  align-items: center;
  border-radius: 14px;
  border: none;
  outline: none;
  background: var(--main-bgr-color);
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
`;

export const OptionStyled = styled.option`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(20 / 18);
  color: var(--secondary-text-color);
  transition: var(--hover-transition);

  &:hover {
    color: var(--main-text-color);
    background-color: transparent;
  }
`;
