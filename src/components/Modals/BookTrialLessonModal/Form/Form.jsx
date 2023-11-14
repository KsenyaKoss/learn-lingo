import { Formik } from "formik";
import {
  FormStyled,
  RadioButtonsWrp,
  StyledError,
  StyledFieldWrp,
  StyledInputField,
  StyledInputWrp,
  StyledRadioButtonTitle,
  StyledRadioField,
  StyledRadioLabel,
  SubmitButtonStyled,
} from "./FormStyled";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import { trialLessonFormSchema } from "../yupValidationSchema";

const FormTrialLesson = ({ closeModal }) => {
  return (
    <div>
      <Formik
        initialValues={{
          picked: "",
          fullName: "",
          email: "",
          phoneNumber: "",
        }}
        validationSchema={trialLessonFormSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
          closeModal();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <FormStyled onSubmit={handleSubmit}>
            <div>
              <StyledRadioButtonTitle>
                What is your main reason for learning English?
              </StyledRadioButtonTitle>
              <RadioButtonsWrp role="group" aria-labelledby="my-radio-group">
                <StyledRadioLabel>
                  {values.picked === "careerAndBusiness" ? (
                    <MdOutlineRadioButtonChecked color="var(--orange)" />
                  ) : (
                    <MdOutlineRadioButtonUnchecked color="var(--orange)" />
                  )}
                  <StyledRadioField
                    type="radio"
                    name="picked"
                    value="careerAndBusiness"
                  />
                  Career and business
                </StyledRadioLabel>
                <StyledRadioLabel>
                  {values.picked === "lessonForKids" ? (
                    <MdOutlineRadioButtonChecked color="var(--orange)" />
                  ) : (
                    <MdOutlineRadioButtonUnchecked color="var(--orange)" />
                  )}
                  <StyledRadioField
                    type="radio"
                    name="picked"
                    value="lessonForKids"
                    as={StyledRadioField}
                  />
                  Lesson for kids
                </StyledRadioLabel>
                <StyledRadioLabel>
                  {values.picked === "livingAbroad" ? (
                    <MdOutlineRadioButtonChecked color="var(--orange)" />
                  ) : (
                    <MdOutlineRadioButtonUnchecked color="var(--orange)" />
                  )}
                  <StyledRadioField
                    type="radio"
                    name="picked"
                    value="livingAbroad"
                  />
                  Living abroad
                </StyledRadioLabel>
                <StyledRadioLabel>
                  {values.picked === "examsAndCoursework" ? (
                    <MdOutlineRadioButtonChecked color="var(--orange)" />
                  ) : (
                    <MdOutlineRadioButtonUnchecked color="var(--orange)" />
                  )}
                  <StyledRadioField
                    type="radio"
                    name="picked"
                    value="examsAndCoursework"
                  />
                  Exams and coursework
                </StyledRadioLabel>
                <StyledRadioLabel>
                  {values.picked === "cultureTravelHobby" ? (
                    <MdOutlineRadioButtonChecked color="var(--orange)" />
                  ) : (
                    <MdOutlineRadioButtonUnchecked color="var(--orange)" />
                  )}
                  <StyledRadioField
                    type="radio"
                    name="picked"
                    value="cultureTravelHobby"
                  />
                  Culture, travel or hobby
                </StyledRadioLabel>
                {errors.picked && (
                  <StyledError className="error">{errors.picked}</StyledError>
                )}
              </RadioButtonsWrp>
            </div>
            <StyledInputWrp>
              <StyledFieldWrp>
                <StyledInputField
                  name="fullName"
                  placeholder="Full Name"
                  type="text"
                  value={values.fullName}
                  onChange={handleChange}
                  className={
                    touched.fullName && !errors.fullName
                      ? "valid"
                      : touched.fullName && errors.fullName
                      ? "invalid"
                      : ""
                  }
                />
                {touched.fullName && errors.fullName && (
                  <StyledError className="error">{errors.fullName}</StyledError>
                )}
              </StyledFieldWrp>
              <StyledFieldWrp>
                <StyledInputField
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  className={
                    touched.email && !errors.email
                      ? "valid"
                      : touched.email && errors.email
                      ? "invalid"
                      : ""
                  }
                />
                {touched.email && errors.email && (
                  <StyledError className="error">{errors.email}</StyledError>
                )}
              </StyledFieldWrp>
              <StyledFieldWrp>
                <StyledInputField
                  name="phoneNumber"
                  placeholder="Phone number"
                  type="phone"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  className={
                    touched.phoneNumber && !errors.phoneNumber
                      ? "valid"
                      : touched.phoneNumber && errors.phoneNumber
                      ? "invalid"
                      : ""
                  }
                />
                {touched.phoneNumber && errors.phoneNumber && (
                  <StyledError className="error">
                    {errors.phoneNumber}
                  </StyledError>
                )}
              </StyledFieldWrp>
            </StyledInputWrp>

            <SubmitButtonStyled
              disabled={
                isSubmitting ||
                values.picked === "" ||
                values.fullName === "" ||
                values.email === "" ||
                values.phoneNumber === ""
              }
              type="submit"
            >
              Book
            </SubmitButtonStyled>
          </FormStyled>
        )}
      </Formik>
    </div>
  );
};

export default FormTrialLesson;
