import Plug from "../../assets/images/plug.png";
import {
  HeroStyled,
  HeroTextStyled,
  ImgWrp,
  MainButtonStyled,
  PStyled,
  SpanStyled,
  StyledH1,
} from "./HeroStyled";
import { useEffect, useState } from "react";
import BluePicture from "../../assets/images/bgrPicture-blue.png";
import GreenPicture from "../../assets/images/bgrPicture-green.png";
import LightPinkPicture from "../../assets/images/bgrPicture-light-pink.png";
import OrangePicture from "../../assets/images/bgrPicture-orange.png";
import PinkPicture from "../../assets/images/bgrPicture-orange.png";
import { useNavigate} from "react-router";

const pictures = [
  BluePicture,
  LightPinkPicture,
  GreenPicture,
  OrangePicture,
  PinkPicture,
];

const Hero = () => {
  const [currentPicture, setCurrentPicture] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const picturesKeys = Object.keys(pictures);
    const randomIndex = Math.floor(Math.random() * picturesKeys.length);
    const randomColor = picturesKeys[randomIndex];
    setCurrentPicture(pictures[randomIndex]);
    switch (randomColor) {
      case '0':
        setCurrentColor("blue");
        break;
      case '1':
        setCurrentColor("lightPink");
        break;
      case '2':
        setCurrentColor("green");
        break;
      case '3':
        setCurrentColor("orange");
        break;
      case '4':
        setCurrentColor("pink");
        break;

      default:
        break;
    }
  }, []);
  console.log(currentColor);

  return (
    <HeroStyled>
      <HeroTextStyled>
        <StyledH1>
          Unlock your potential with <br /> the best{" "}
          <SpanStyled color={currentColor}>language</SpanStyled> tutors
        </StyledH1>
        <PStyled>
          Embark on an Exciting Language Journey with Expert Language <br />
          Tutors: Elevate your language proficiency to new heights by <br />
          connecting with highly qualified and experienced tutors.
        </PStyled>
        <MainButtonStyled color={currentColor} onClick={()=> navigate('/teachers')}>Get started</MainButtonStyled>
      </HeroTextStyled>
      <ImgWrp>
        <img src={currentPicture || Plug} alt="image" />
      </ImgWrp>
    </HeroStyled>
  );
};

export default Hero;
