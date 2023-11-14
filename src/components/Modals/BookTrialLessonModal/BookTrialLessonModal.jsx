import { useEffect } from "react";
import { ImgStyled, ImgWrp, ModalBody, Overlay, StyledIconClose, StyledNameTeacher, StyledP, StyledTeacherP, StyledTitle, TeacherWrp } from "./BookTrialLessonModalStyled";
import FormTrialLesson from "./Form/Form";

const BookTrialLessonModal = ({teacher, onClose}) => {
  const { avatar_url, name, surname } = teacher;

  useEffect(() => {
    const body = document.body;
    // Блокируем скроллинг фона при открытии модалки
    body.style.overflow = "hidden";

    // Убираем блокировку скроллинга при закрытии модалки
    return () => {
      body.style.overflow = "visible";
    };
  }, []);

  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeKeyPress);
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [onClose]);

  const handleInnerClick = (event) => {
    event.stopPropagation();
  };


  return (
    <Overlay onClick={onClose}>
      <ModalBody onClick={handleInnerClick}>
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
     <FormTrialLesson/>
      </ModalBody>
    </Overlay>
  );
};

export default BookTrialLessonModal;
