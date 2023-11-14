import { useState } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import {
  AuthButtons,
  LogInButtonStyled,
  RegistrationButtonStyled,
  StyledHeader,
  StyledIconLogin,
  StyledIconLogout,
} from "./HeaderStyled";
import LoginModal from "../Modals/LoginModal/LoginModal";
import useAuth from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/Auth/authSlice";


const Header = () => {
  const [modalView, setModalView] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuth } = useAuth();
  const dispatch = useDispatch();
  

  const openModal = (param) => {
    setModalView(param);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalView("");
    setIsModalOpen(false);
  };

  return (
    <StyledHeader>
      <Logo/>
      <Navigation />
      <AuthButtons>
        {isAuth ? (
          <LogInButtonStyled onClick={() => dispatch(removeUser())}>
            <StyledIconLogout />
            Log Out
          </LogInButtonStyled>
        ) : (
          <LogInButtonStyled onClick={() => openModal("loginView")}>
            <StyledIconLogin />
            Log in
          </LogInButtonStyled>
        )}
        <RegistrationButtonStyled
          onClick={() => openModal("registrationModal")}
        >
          Registration
        </RegistrationButtonStyled>
      </AuthButtons>
      {isModalOpen && <LoginModal view={modalView} closeModal={closeModal} />}
    </StyledHeader>
  );
};

export default Header;
