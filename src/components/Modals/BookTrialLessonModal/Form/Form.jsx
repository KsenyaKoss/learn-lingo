import { Formik} from "formik";
import {
  FormStyled,
  RadioButtonsWrp,
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


const FormTrialLesson = () => {
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
        }}
      >
        {({ values, errors, touched, setFieldTouched, handleChange, handleSubmit}) => (
          <FormStyled onSubmit={handleSubmit}>
            <div>
              <StyledRadioButtonTitle>
                What is your main reason for learning English?
              </StyledRadioButtonTitle>
              <RadioButtonsWrp role="group" aria-labelledby="my-radio-group">
                <StyledRadioLabel>
                  {values.picked === "careerAndBusiness"? (
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
                {values.picked === "lessonForKids"? (
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
                {values.picked === "livingAbroad"? (
                    <MdOutlineRadioButtonChecked color="var(--orange)" />
                  ) : (
                    <MdOutlineRadioButtonUnchecked color="var(--orange)" />
                  )}
                  <StyledRadioField type="radio" name="picked" value="livingAbroad" />
                  Living abroad
                </StyledRadioLabel>
                <StyledRadioLabel>
                {values.picked === "examsAndCoursework"? (
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
                {values.picked === "cultureTravelHobby"? (
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
              </RadioButtonsWrp>
            </div>
            <StyledInputWrp>
              <StyledInputField name="fullName" placeholder="Full Name" />
           
              <StyledInputField name="email" placeholder="Email" />
              <StyledInputField name="phoneNumber" placeholder="Phone number" />
            </StyledInputWrp>

            <SubmitButtonStyled type="submit">Book</SubmitButtonStyled>
          </FormStyled>
        )}
      </Formik>
    </div>
  );
};

export default FormTrialLesson;
