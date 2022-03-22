import { MostPopularContainer, MostPopularSection } from "../styles/MostPopular.styled"
import { Link } from "react-router-dom";
import { useGetPopularCocktailQuery } from "../services/cocktailApi"
import {CocktailCard} from "./CocktailCard";
import { BackToFlavors } from "../styles/CocktailDetails.styled";
import { Loader } from "./Loader";

export const MostPopular = () => {
const {data, isFetching} = useGetPopularCocktailQuery();
const popularCocktails = data?.drinks;

if(isFetching) return <Loader />;


    return(
        <>
        <MostPopularSection>
            <BackToFlavors>
            <Link to="/">Back to cocktails</Link>
            </BackToFlavors>
            
            <MostPopularContainer>
               
               {popularCocktails && popularCocktails.map((popular) =>(
                   <CocktailCard 
                   key={popular.idDrink}
                   id={popular.idDrink}
                   title={popular.strDrink}
                   image={popular.strDrinkThumb} />
               ))} 
               </MostPopularContainer>
        </MostPopularSection>
        </>
    )
}