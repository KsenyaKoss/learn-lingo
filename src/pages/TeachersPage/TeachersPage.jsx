import { ref, get } from "firebase/database";
import { database } from "../../firebase.js"
import { useDispatch, useSelector } from "react-redux";
import { addTeachers } from "../../redux/Teachers/teachersSlice";
import { useEffect } from "react";
import Card from "../../components/Teachers/Card/Card.jsx";


const TeachersPage = () => {
  const currentPage = useSelector(state => state.teachers.currentPage);
  const teachers = useSelector(state => state.teachers.teachers);
  console.log(teachers);
  console.log(database);
  const dispatch = useDispatch();

  const loadTeachers = async () => {
    try {
      const teachersRef = ref(database, `/`);
      const snapshot = await get(teachersRef);
      console.log(snapshot);
      if(snapshot.exists()){
        const newTeachers = snapshot.val();
        console.log(newTeachers);
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
    <div>
      {teachers.map((item, index )=> <Card key={index}  item={item}/>)}
    </div>
  )
}

export default TeachersPage
