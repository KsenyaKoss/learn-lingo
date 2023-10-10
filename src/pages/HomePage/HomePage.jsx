import Container from "../../components/Container/Container";
import Hero from "../../components/Hero/Hero";
import { StyledItem, StyledList, StyledQuantity, StyledTitle } from "./HomePageStyled";
import { statistic } from "./data.json";

const HomePage = () => {
 
  return (
    <Container>
      <Hero />
      <StyledList>
        {statistic.map(({ title, quantity }) => (
          <StyledItem key={quantity}>
            <StyledQuantity>{`${quantity}`}</StyledQuantity>
            <StyledTitle>{`${title}`}</StyledTitle>
          </StyledItem>
        ))}
      </StyledList>
    </Container>
  );
};

export default HomePage;
