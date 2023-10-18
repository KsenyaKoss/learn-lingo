import { ref, get } from "firebase/database";
import { database } from "../../firebase.js"
import { useDispatch, useSelector } from "react-redux";
import { addTeachers } from "../../redux/Teachers/teachersSlice";
import { useEffect } from "react";
import Card from "../../components/Teachers/Card/Card.jsx";
import { StyledPage } from "./TeachersPageStyled.js";


const TeachersPage = () => {
  // const currentPage = useSelector(state => state.teachers.currentPage);
  const teachers = useSelector(state => state.teachers.teachers);
  const dispatch = useDispatch();

  const loadTeachers = async () => {
    try {
      const teachersRef = ref(database, `/`);
      const snapshot = await get(teachersRef);
      if(snapshot.exists()){
        const newTeachers = snapshot.val();
        dispatch(addTeachers(newTeachers));
      }
    } catch(error) {
      console.error("Помилка завантаження");
    }
  }

  useEffect(() => {
    loadTeachers();
  }, [])


  return (
    <StyledPage>
      {teachers.map((item, index )=> <Card key={index}  item={item}/>)}
    </StyledPage>
  )
}

export default TeachersPage
