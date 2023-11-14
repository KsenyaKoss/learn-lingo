import { Field, Form } from "formik";
import styled from "styled-components";

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
`;
export const StyledRadioButtonTitle = styled.p`
  margin-bottom: 20px;
  color: var(--main-text-color);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(32 / 24);
`;
export const RadioButtonsWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const StyledRadioLabel = styled.label`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(22 / 16);
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const StyledRadioField = styled(Field)`
  display: none;
`;

export const StyledInputWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const StyledFieldWrp = styled.div`
  width: 472px;
  position: relative;
  
`;


export const StyledInputField = styled(Field)`
width: 100%;
  padding: 18px;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  outline: none;
  color: var(----main-text-color);
  &.valid {
    border-color: green;
  }

  &.invalid {
    border-color: red;
  }
`;

export const StyledError = styled.p`
  margin-top: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: calc (14 / 12);
  color: #da1414;
  margin-left: 24px;
`;


export const SubmitButtonStyled = styled.button`
  display: inline-flex;
  padding: 16px;
  width: 472px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border-color: transparent;
  background-color: var(--orange);
  color: var(----main-text-color);
  font-size: 18px;
  font-weight: 700;
  line-height: calc(28 / 18);
  outline: none;
  cursor: pointer;
  transition: var(--hover-transition);
  &:hover {
    background-color: var(--orange-hover);
  }
`;
