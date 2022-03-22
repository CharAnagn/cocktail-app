
import { useEffect, useState } from "react";
import { useGetRandomCocktailQuery } from "../services/cocktailApi"
import { CocktailCard } from "./CocktailCard";




export const RandomCocktail = () => {
const [randomCocktail, setRandomCocktail] = useState({});
    
    
    const fetchRandomCocktail = () =>{
    fetch("https://the-cocktail-db.p.rapidapi.com/random.php", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "4f78d877a3mshb70c46ee39302a9p153acbjsna0447edc3b46"
        }
    })
    .then(response => response.json())
    .then(data => {
        setRandomCocktail(data)
        console.log(randomCocktail);
        
    })
    .catch(err => {
        console.error(err);
    });
};

useEffect(()=>{
    
    fetchRandomCocktail()

},[])





    return (
        <>

         <CocktailCard title={randomCocktail.drinks[0].strDrink} />

        <button onClick={fetchRandomCocktail} >click me</button>
        </>
    )
}