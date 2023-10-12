import * as yup from "yup";

const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const yupSchemaSigUp = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(regEx, { message: "please create a stronger password" })
    .required("Required"),
});

export const yupSchemaLogIn = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(regEx, { message: "please create a stronger password" })
    .required("Required"),
})
