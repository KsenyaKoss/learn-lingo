import Form from "../Form/Form";

import {
  ModalBody,
  Overlay,
  StyledIconClose,
  StyledTitle,
} from "./LoginModalStyled";

const SignUpModal = ({ view, closeModal }) => {


  
  return (
    <div>
      <Overlay>
        <ModalBody>
          <StyledTitle>Registration</StyledTitle>
          <StyledIconClose onClick={closeModal} />
          
          <Form view={view} user={newUser} />
        </ModalBody>
      </Overlay>
    </div>
  );
};

export default SignUpModal;
