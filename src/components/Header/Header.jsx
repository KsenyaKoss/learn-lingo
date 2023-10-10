import { useState } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { AuthButtons, StyledHeader } from "./HeaderStyled";
import LoginModal from "../Modals/LoginModal/LoginModal";

const Header = () => {
  const [modalView, setModalView] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (param) => {
    setModalView(param);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setModalView('');
    setIsModalOpen(false);
  }


  return (
    <StyledHeader>
      <Logo />
      <Navigation />
     <AuthButtons>
     <button onClick={()=> openModal('loginView')}>Log in</button>
      <button onClick={()=> openModal('registrationModal')}>Registration</button>
     </AuthButtons>
     {isModalOpen && <LoginModal view={modalView} closeModal={closeModal}/>}
    </StyledHeader>
  );
};

export default Header;
