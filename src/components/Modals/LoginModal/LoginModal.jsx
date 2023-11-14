import Form from "../Form/Form";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import {
  ModalBody,
  Overlay,
  StyledIconClose,
  StyledP,
  StyledTitle,
} from "./LoginModalStyled";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/Auth/authSlice";

const LoginModal = ({ view, closeModal }) => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const newUser = ({ name, email, password }) => {
    if (view === "loginView") {
      signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          dispatch(
            setUser({
              name: user.displayName,
              email: user.email,
              token: user.accessToken,
              id: user.uid,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const displayName = name;
         console.log(user, displayName);
          updateProfile(user, {
            displayName: displayName,
          }).then(()=> {
            dispatch(
              setUser({
                name: user.displayName,
                email: user.email,
                token: user.accessToken,
                id: user.uid,
              })
            );
          }).catch((profileError) => {
          })})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
  }}
  return (
    <Overlay>
      <ModalBody>
        <StyledTitle>
          {view === "loginView" ? "Log In" : "Registration"}
        </StyledTitle>
        <StyledIconClose onClick={closeModal} />
        {view === "loginView" ? (
          <StyledP>
            {" "}
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </StyledP>
        ) : (
          <StyledP>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </StyledP>
        )}
        <Form view={view} user={newUser} closeModal={closeModal} />
      </ModalBody>
    </Overlay>
  );
};

export default LoginModal;
