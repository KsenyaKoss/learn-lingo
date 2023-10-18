import  OpenBook  from "../../../assets/book-open-01.jsx"
import Star from "../../../assets/star.jsx";
import Heart  from "../../../assets/heart.jsx";
import LikeHeart  from "../../../assets/heart-hover.jsx";
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

const Card = ({ item }) => {
  const [moreInfoVisible, setMoreInfoVisible] = useState(false);
  //  console.log(item);
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
            <StyledItem><OpenBook/>Lessons online</StyledItem>
            <StyledItem>
              Lessons done: <span>{lessons_done}</span>
            </StyledItem>
            <StyledItem>
              {" "}
              <Star/>
              Rating: <span>{rating}</span>
            </StyledItem>
            <StyledItem>
              Price / 1 hour: <span>{`${price_per_hour}$`}</span>
            </StyledItem>
            <ButtonLikeStyled> <Heart/> </ButtonLikeStyled>
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
              <Button key={index} title={el} />
            ))}
          </LevelListWrp>
        </TextContainer>
      </CardWrp>
    </Container>
  );
};

export default Card;
