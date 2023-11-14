import { useNavigate } from "react-router-dom";
import LogoUkraine from "../../assets/ukraine.svg";
import { LogoStyled, StyledImg, StyledP } from "./StyledLogo";


const Logo = () => {
  const navigate = useNavigate()
  return (
    <LogoStyled onClick={()=> navigate("/")}>
      <StyledImg src={LogoUkraine} alt="LogoUkraine" /> 
      <StyledP>LearnLingo</StyledP>
    </LogoStyled>
  );
};

export default Logo;
