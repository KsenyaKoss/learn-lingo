import LogoUkraine from "../../assets/ukraine.svg";
import { LogoStyled } from "./StyledLogo";


const Logo = () => {
  return (
    <LogoStyled>
      <img src={LogoUkraine} alt="LogoUkraine" /> 
      <p>LearnLingo</p>
    </LogoStyled>
  );
};

export default Logo;
