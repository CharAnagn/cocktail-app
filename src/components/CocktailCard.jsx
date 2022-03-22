import { Link } from "react-router-dom";
import {
  CTCardContainer,
  CTCardImage,
  CTCardOuter,
  CTCardTittle,
} from "../styles/CocktailCard.styled";



export const CocktailCard = (props) => {
  

  

  return (
    <CTCardContainer>
          <CTCardOuter>
            <Link to={`/drinks/${props.id}`}>
              <CTCardImage src={props.image} />
              <CTCardTittle>{props.title}</CTCardTittle>
            </Link>
          </CTCardOuter>
    </CTCardContainer>
  );
};
