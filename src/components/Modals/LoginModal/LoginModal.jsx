import { useFormik } from "formik";
import {
  ModalBody,
  Overlay,
  StyledError,
  StyledEyeIcon,
  StyledForm,
  StyledIconClose,
  StyledInput,
  StyledInputWrp,
  StyledP,
  StyledSubmitButton,
  StyledTitle,
} from "./LoginModalStyled";
import { yupSchema } from "../yupValidationSchema";


const onSubmit = (values, actions) => {
    actions.resetForm()
}



const LoginModal = ({ view, closeModal }) => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: yupSchema,
      onSubmit,
    });
  console.log(errors);
  return (
    <Overlay>
      <ModalBody>
        <StyledTitle>
          {view === "loginView" ? "Log In" : "Registration"}
        </StyledTitle>
        <StyledIconClose onClick={closeModal} />
        <StyledP>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </StyledP>
        <StyledForm onSubmit={handleSubmit}>
          {view === "registrationModal" && (
            <StyledInput
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
              className={
                touched.name && !errors.name
                  ? "valid"
                  : errors.name && touched.name
                  ? "invalid"
                  : ""
              }
            />
         
          )}
             {touched.name && errors.name && <StyledError className="error">{errors.name}</StyledError>}
          <StyledInputWrp>
            <StyledInput
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              className={
                touched.email && !errors.email
                  ? "valid"
                  : errors.email && touched.email
                  ? "invalid"
                  : ""
              }
            />
             {touched.email && errors.email && <StyledError className="error">{errors.email}</StyledError>}
          </StyledInputWrp>
          <StyledInputWrp>
            <StyledInputWrp>
              <StyledInput
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
                className={
                  touched.password && !errors.password
                    ? "valid"
                    : errors.password && touched.password
                    ? "invalid"
                    : ""
                }
              />
               {touched.password && errors.password && <StyledError className="error">{errors.password}</StyledError>}
            </StyledInputWrp>
            <StyledEyeIcon />
          </StyledInputWrp>
          <StyledSubmitButton disabled={isSubmitting}   type="submit">
            {view === "loginView" ? "Log In" : "Sign Up"}
          </StyledSubmitButton>
        </StyledForm>
      </ModalBody>
    </Overlay>
  );
};

export default LoginModal;
