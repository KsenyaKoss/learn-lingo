import OpenBook from "../../../assets/book-open-01.jsx";
import Star from "../../../assets/star.jsx";
import Heart from "../../../assets/heart.jsx";
import LikeHeart from "../../../assets/heart-hover.jsx";
import Reviews from "../Reviews/Reviews";
import Button from "../LevelsButtons/Button";
import Container from "../../Container/Container";
import {
  ButtonLikeStyled,
  CardWrp,
  ImgStyled,
  ImgWrp,
  InfoStyled,
  InfoTitle,
  LevelListWrp,
  MainInfoWrp,
  NameStyled,
  NameWrp,
  ReadMoreButton,
  StyledItem,
  StyledUpperList,
  TextContainer,
  UpperWrp,
} from "./CardStyled";
import { useState } from "react";
import useAuth from "../../../hooks/use-auth.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../redux/Teachers/teachersSlice.js";
import Notiflix from "notiflix";

const Card = ({ item, filter }) => {
  const [moreInfoVisible, setMoreInfoVisible] = useState(false);
  const favoriteTeachers = useSelector((state) => state.teachers.favorites);
  const isFavorite = favoriteTeachers?.some(teacher => teacher.lessons_done === item.lessons_done);
  const { isAuth } = useAuth();
  const dispatch = useDispatch();

  const handleLikeTeacher = (teacher) => {
    if (isAuth && !isFavorite) {
      dispatch(addToFavorites(teacher));
      return;
    } else if (isAuth && isFavorite) {
      dispatch(removeFromFavorites(teacher));
      return;
    }
    Notiflix.Notify.warning(
      "Цей функціонал доступний тільки авторизованим користувачам"
    );
  };
  const {
    avatar_url,
    name,
    surname,
    languages,
    lesson_info,
    conditions,
    lessons_done,
    rating,
    price_per_hour,
    experience,
    reviews,
    levels,
  } = item;
  return (
    <Container>
      <CardWrp>
        <ImgWrp>
          {" "}
          <ImgStyled src={avatar_url} alt="avatar" />
        </ImgWrp>
        <TextContainer>
          <UpperWrp>
            <NameWrp>
              <InfoTitle>Languages</InfoTitle>
              <NameStyled>{`${name} ${surname}`}</NameStyled>
            </NameWrp>

            <StyledUpperList>
              <StyledItem>
                <OpenBook />
                Lessons online
              </StyledItem>
              <StyledItem>
                Lessons done: <span>{lessons_done}</span>
              </StyledItem>
              <StyledItem>
                {" "}
                <Star />
                Rating: <span>{rating}</span>
              </StyledItem>
              <StyledItem>
                Price / 1 hour: <span>{`${price_per_hour}$`}</span>
              </StyledItem>
              <ButtonLikeStyled onClick={() => handleLikeTeacher(item)}>
                {isFavorite ? <LikeHeart /> : <Heart />}
              </ButtonLikeStyled>
            </StyledUpperList>
          </UpperWrp>

          <MainInfoWrp>
            <InfoTitle>
              Speaks:{" "}
              <InfoStyled className="languages">{`${languages}`}</InfoStyled>
            </InfoTitle>
            <InfoTitle>
              Lesson Info: <InfoStyled>{`${lesson_info}`}</InfoStyled>
            </InfoTitle>
            <InfoTitle>
              Conditions: <InfoStyled>{`${conditions}`}</InfoStyled>
            </InfoTitle>
          </MainInfoWrp>
          {!moreInfoVisible ? (
            <ReadMoreButton onClick={() => setMoreInfoVisible(true)}>
              Read more
            </ReadMoreButton>
          ) : (
            <>
              <p>{experience}</p>
              {reviews.map((el, index) => (
                <Reviews key={index} el={el} />
              ))}
            </>
          )}
          <LevelListWrp>
            {levels.map((el, index) => (
              <Button key={index} title={el} filter={filter} />
            ))}
          </LevelListWrp>
        </TextContainer>
      </CardWrp>
    </Container>
  );
};

export default Card;
