import { useFormik } from "formik";
import {
  StyledError,
  StyledEyeIcon,
  StyledForm,
  StyledInput,
  StyledInputWrp,
  StyledSubmitButton,
} from "./FormStyed";
import { yupSchemaSigUp, yupSchemaLogIn } from "../yupValidationSchema";

const Form = ({ view, user, closeModal }) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: view === "loginView" ? yupSchemaLogIn : yupSchemaSigUp,
    onSubmit: (values, actions) => {
      user(values);
      actions.resetForm();
      closeModal();
    },
  });
  return (
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
      {touched.name && errors.name && (
        <StyledError className="error">{errors.name}</StyledError>
      )}
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
        {touched.email && errors.email && (
          <StyledError className="error">{errors.email}</StyledError>
        )}
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
          {touched.password && errors.password && (
            <StyledError className="error">{errors.password}</StyledError>
          )}
        </StyledInputWrp>
        <StyledEyeIcon />
      </StyledInputWrp>
      <StyledSubmitButton disabled={isSubmitting} type="submit">
        {view === "loginView" ? "Log In" : "Sign Up"}
      </StyledSubmitButton>
    </StyledForm>
  );
};

export default Form;
