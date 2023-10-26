import styled from "styled-components";
import {
    AiOutlineClose,
  } from "react-icons/ai";

  export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  opacity: 1;
  transition: opacity 0.3s ease-in-out, left 0.3s ease-in-out;
`;

export const ModalBody = styled.div`
  position: relative;
  width: 560px;
  background-color: var(--main-bgr-color);
  padding: 64px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  text-align: left;
`;

export const StyledTitle = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: calc(48 / 40);
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const StyledIconClose = styled(AiOutlineClose)`
  position: absolute;
  top: 20px;
  right: 20px;
`;


export const StyledP = styled.p`
  font-size: 16px;
  line-height: calc(22 / 16);
  margin-bottom: 20px;
`;

export const ImgWrp = styled.div`
  width: 44px;
  height: 44px;
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

export const TeacherWrp = styled.div`
display: flex;
gap: 14px;
align-items: center;
`
export const StyledTeacherP = styled.p`
color: var(--secondary-text-color);
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: calc(16 / 12);
`

export const  StyledNameTeacher = styled.p`
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: calc(24 / 16);
`


