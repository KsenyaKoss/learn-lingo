import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const trialLessonFormSchema = yup.object().shape({
  picked: yup
    .string()
    .oneOf([
      "careerAndBusiness",
      "lessonForKids",
      "livingAbroad",
      "examsAndCoursework",
      "cultureTravelHobby",
    ], "Please choose one option")
    .required("Required"),
    fullName: yup.string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
    email: yup
    .string().
    email("Please enter a valid email")
    .required("Required"),
    phoneNumber: yup
    .string().matches(phoneRegExp, 'Phone number is not valid')
});
