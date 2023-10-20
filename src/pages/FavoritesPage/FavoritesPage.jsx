import { useSelector } from "react-redux";
import Card from "../../components/Teachers/Card/Card";
import { StyledPage } from "./FavoritesPageStyled";

const FavoritesPage = () => {
  const favoriteTeachers = useSelector((state) => state.teachers.favorites);

  return (
    <StyledPage>
      {favoriteTeachers?.length !== 0 &&
        favoriteTeachers.map((teacher, index) => (
          <Card key={index} item={teacher} />
        ))}
    </StyledPage>
  );
};

export default FavoritesPage;
