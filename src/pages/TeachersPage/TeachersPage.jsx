import { ref, get } from "firebase/database";
import { database } from "../../firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { addTeachers } from "../../redux/Teachers/teachersSlice";
import { useEffect, useState } from "react";
import Card from "../../components/Teachers/Card/Card.jsx";
import { StyledButton, StyledPage } from "./TeachersPageStyled.js";
import Filter from "../../components/Filter/Filter.jsx";

const TeachersPage = () => {
  const [renderTeachersCount, setRenderTeachersCount] = useState(4);
  const teachers = useSelector((state) => state.teachers.teachers);
  const filters = useSelector((state) => state.teachers.filter);
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

  const filteredTeachers = teachers.filter((teacher) => {
    const { languages, levels, price_per_hour } = filters;
    if (!languages && !levels && !price_per_hour) {
      return true;
    }
    const languageFilterResult =
      !languages || teacher.languages.includes(languages);
    const levelFilterResult = !levels || teacher.levels.includes(levels);
    const priceFilterResult =
      !price_per_hour || teacher.price_per_hour <= price_per_hour;
    return languageFilterResult && levelFilterResult && priceFilterResult;
  });

  const loadMore = () => setRenderTeachersCount((prev) => prev + 4);

  return (
    <StyledPage>
      <Filter />
      {filteredTeachers?.length !== 0 ? (
        filteredTeachers
          ?.slice(0, renderTeachersCount)
          .map((item, index) => (
            <Card key={index} item={item} filter={filters.levels} />
          ))
      ) : (
        <h2>No teachers was found</h2>
      )}
      {(!(renderTeachersCount >= teachers.length ) && filteredTeachers.length !== 0 )&& (
        <StyledButton onClick={loadMore}>Load more</StyledButton>
      )}
    </StyledPage>
  );
};

export default TeachersPage;
