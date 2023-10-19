import { ref, get, equalTo } from "firebase/database";
import { database } from "../../firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { addTeachers } from "../../redux/Teachers/teachersSlice";
import { useEffect, useState } from "react";
import Card from "../../components/Teachers/Card/Card.jsx";
import { StyledPage } from "./TeachersPageStyled.js";
import Filter from "../../components/Filter/Filter.jsx";

const TeachersPage = () => {
  // const currentPage = useSelector(state => state.teachers.currentPage);
  const teachers = useSelector((state) => state.teachers.teachers);
  const filters = useSelector((state) => state.teachers.filter);
  console.log(filters);
  console.log(teachers);
  const dispatch = useDispatch();

  const loadTeachers = async () => {
    try {
      const teachersRef = ref(database, `/`);
      const snapshot = await get(teachersRef);

      if (snapshot.exists()) {
        const newTeachers = snapshot.val();
        dispatch(addTeachers(newTeachers));
      }
    } catch (error) {
      console.error("Помилка завантаження");
    }
  };

  useEffect(() => {
    loadTeachers();
  }, []);

  const filteredTeachers = () => {
    const { languages, levels, price } = filters;
    return teachers.filter((teacher) => {
      if (!languages && !levels && !price) {
        return true;
      }
      const languageFilterResult =
        !languages || teacher.languages.includes(languages);
      const levelFilterResult = !levels || teacher.levels.includes(levels);
      const priceFilterResult = !price || teacher.price_per_hour === price;
      return languageFilterResult && levelFilterResult && priceFilterResult;
    });
  };
  
  return (
    <StyledPage>
      <Filter />
      {filteredTeachers().map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </StyledPage>
  );
};

export default TeachersPage;
