import { useSelector } from "react-redux";
import Card from "../../components/Teachers/Card/Card";
import { StyledPage, StyledTitle } from "./FavoritesPageStyled";


const FavoritesPage = () => {
  const favoriteTeachers = useSelector((state) => state.teachers.favorites);

  return (
    <StyledPage>
      {favoriteTeachers?.length !== 0 ?
        favoriteTeachers.map((teacher, index) => (
          <Card key={index} item={teacher} />
        )) : <StyledTitle>There is no your favorite teachers</StyledTitle>   }
    </StyledPage>
  );
};

export default FavoritesPage;
