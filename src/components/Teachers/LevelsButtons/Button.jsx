import { LevelButtonStyled } from "./ButtonStyled"

const ButtonStyled = ({title, filter}) => {
    return (
      <LevelButtonStyled className={(filter !== "" && filter === title) && "active" }>{title}</LevelButtonStyled>
    )
  }
  export default ButtonStyled