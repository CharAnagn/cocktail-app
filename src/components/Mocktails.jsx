import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetMocktailsQuery } from "../services/cocktailApi"
import { MocktailNav, MocktailsCardContainer, MocktailsStyledSection } from "../styles/Mocktails.styled";
import { CocktailCard } from "./CocktailCard"
import { Loader } from "./Loader";

export const Mocktails = () => {
    
  const {data : mocktailsList, isFetching} = useGetMocktailsQuery();
  const [mocktails, setMocktails] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  

  useEffect(()=> {
      setMocktails(mocktailsList?.drinks);

      const filteredMocktails = mocktailsList?.drinks.filter((item) => item.strDrink.toLowerCase().includes(searchTerm));

      setMocktails(filteredMocktails);
  }, [mocktailsList,searchTerm])

  if(isFetching) return <Loader />;


    return (
        <>
        <MocktailsStyledSection>
            <MocktailNav>
                    <Link to="/">Back to cocktails</Link>
                    <input placeholder="Search Mocktail" onChange={(e)=>setSearchTerm(e.target.value.toLocaleLowerCase())}/>
                   
            </MocktailNav>
            <hr />
            <MocktailsCardContainer>
        {mocktails && mocktails.map((mocktail) => (
            <CocktailCard
            id={mocktail.idDrink}
            title={mocktail.strDrink}
            image={mocktail.strDrinkThumb} />
        ))}
        </MocktailsCardContainer>
        </MocktailsStyledSection>
        </>
    )
}