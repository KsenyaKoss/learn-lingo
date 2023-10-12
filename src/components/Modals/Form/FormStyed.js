import styled from "styled-components";

import {
    AiOutlineEyeInvisible,
    AiOutlineEye,
  } from "react-icons/ai";

  export const StyledEyeIconOpen = styled(AiOutlineEye)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 18px;
  flex-direction: column;
`;

export const StyledInputWrp = styled.div`
  max-width: 438px;
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  background-color: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(22 / 16);

  &.valid {
    border-color: green;
  }

  &.invalid {
    border-color: red;
  }
`;

export const StyledEyeIcon = styled(AiOutlineEyeInvisible)`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
`;

export const StyledError = styled.p`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: calc (14 / 12);
  color: #da1414;
  margin-left: 24px;
`;

export const StyledSubmitButton = styled.button`
  max-width: 438px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--orange);
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: var(--hover-transition);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55;

  &:hover {
    background-color: var(--orange-hover);
  }
`;
