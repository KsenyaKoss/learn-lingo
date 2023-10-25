import Hero from "../../components/Hero/Hero";
import { HomePageWrp, StyledItem, StyledList, StyledQuantity, StyledTitle } from "./HomePageStyled";
import { statistic } from "./data.json";

const HomePage = () => {
   
  return (
    <HomePageWrp>
      <Hero />
      <StyledList>
        {statistic.map(({ title, quantity }) => (
          <StyledItem key={quantity}>
            <StyledQuantity>{`${quantity}`}</StyledQuantity>
            <StyledTitle>{`${title}`}</StyledTitle>
          </StyledItem>
        ))}
      </StyledList>
    </HomePageWrp>
  );
};

export default HomePage;
