import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { StyledMidSection, MidSectionList, SubMenu } from "../styles/Homepage.styled"
import { CocktailsSecion, HomepageContainer } from "../styles/Homepage.styled"
import {CocktailCard} from "../components/CocktailCard"
import {gsap} from "gsap";

import { useGetCocktailsQuery } from "../services/cocktailApi"

export const Homepage = (props) => {
    
    const { data : cocktailList, isFetching } = useGetCocktailsQuery();
    const [ cocktails, setCocktails ] = useState();
    const [searchTerm, setSearchTerm]= useState('');
    
    
    useEffect(() => {
        setCocktails(cocktailList?.drinks);

        const filteredData = cocktailList?.drinks.filter((item) => item.strDrink.toLowerCase().includes(searchTerm));

        setCocktails(filteredData);
        
    }, [cocktailList,searchTerm])
   
  
    

    if (isFetching) return "Loading..."

    const categories = [
        "Cocktail",
        "Shake",
        "Cocoa",
        "Shot",
        "Coffee / Tea",
        "Homemade Liqueur",
        "Punch / Party Drink",
        "Beer",
        "Soft Drink",
      ];

    return (
      

        <>
        <HomepageContainer>
        <StyledMidSection>
        <MidSectionList>
          <ul>
            <li>
              <Link to="/most-popular">Most popular cocktails</Link>
            </li>
            <li>
              <Link to="/latest-cocktails">Latest cocktails</Link>
            </li>
          </ul>
          <input placeholder="Search Cocktail" onChange={(e)=>setSearchTerm(e.target.value.toLocaleLowerCase())}/>
        </MidSectionList>
      </StyledMidSection>
      <hr />
             
            
           
            
            
            <CocktailsSecion  >
            {cocktails && cocktails.length !== 0 ? cocktails.slice(0, 50).map((cocktail) =>(
                <CocktailCard
                 id={cocktail.idDrink}
                 image={cocktail.strDrinkThumb}
                 title={cocktail.strDrink}
                 key={cocktail.idDrink}
                 
                 />
            )) : "No cocktails found"}    
              
            </CocktailsSecion>
            
        </HomepageContainer>
        </>
    )
}