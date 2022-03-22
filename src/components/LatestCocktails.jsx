import { Link } from "react-router-dom";
import { useGetLatestCocktailQuery } from "../services/cocktailApi"
import { BackToFlavors, LatestCocktailsContainer, LatestCocktailsSection } from "../styles/layout/LatestCocktails.styled"
import { CocktailCard } from "./CocktailCard";
import { Loader } from "./Loader";


export const LatestCocktails = () => {
const {data, isFetching} = useGetLatestCocktailQuery();
const latestCocktails = data?.drinks;

if(isFetching) return <Loader />;


    return (
        <>
        <LatestCocktailsSection>
            <BackToFlavors>
                <Link to="/">Back to cocktails</Link>
            </BackToFlavors>
            <LatestCocktailsContainer>
                {latestCocktails && latestCocktails.map((latest) =>(
                    <CocktailCard 
                    key={latest.idDrink}
                    title={latest.strDrink}
                    image={latest.strDrinkThumb}
                    id={latest.idDrink} />
                ))}
            </LatestCocktailsContainer>
        </LatestCocktailsSection>
        </>
    )
}