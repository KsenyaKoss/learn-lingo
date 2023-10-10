import  Plug from '../../assets/images/plug.png'
import { HeroStyled, HeroTextStyled, ImgWrp, MainButtonStyled, PStyled, SpanStyled, StyledH1 } from './HeroStyled'



const Hero = () => {
  return (
    <HeroStyled>
      <HeroTextStyled>
        <StyledH1>Unlock your potential with <br/> the best  <SpanStyled>language</SpanStyled> tutors</StyledH1>
        <PStyled>Embark on an Exciting Language Journey with Expert Language <br/>Tutors: Elevate your language proficiency to new heights by <br/>
         connecting with highly qualified and experienced tutors.</PStyled>
         <MainButtonStyled>Get started</MainButtonStyled>
      </HeroTextStyled>
      <ImgWrp>
        <img src={Plug} alt="image" />
      </ImgWrp>
    </HeroStyled>
  )
}

export default Hero
