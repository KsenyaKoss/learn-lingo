import { ImgStyled, ImgWrp, ModalBody, Overlay, StyledIconClose, StyledNameTeacher, StyledP, StyledTeacherP, StyledTitle, TeacherWrp } from "./BookTrialLessonModalStyled";

const BookTrialLessonModal = ({teacher, onClose}) => {
  const { avatar_url, name, surname } = teacher;
  return (
    <Overlay>
      <ModalBody>
        <StyledTitle>Book trial lesson</StyledTitle>
        <StyledP>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </StyledP>
        <StyledIconClose onClick={onClose}/>
     <TeacherWrp>
     <ImgWrp>
            <ImgStyled src={avatar_url} alt="avatar" />
        </ImgWrp>
       <div>
       <StyledTeacherP>Your teacher</StyledTeacherP>
        <StyledNameTeacher>{`${name} ${surname}`}</StyledNameTeacher>
       </div>
     </TeacherWrp>
      </ModalBody>
    </Overlay>
  );
};

export default BookTrialLessonModal;
