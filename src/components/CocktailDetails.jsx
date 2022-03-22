import { Link, useParams } from "react-router-dom";
import { useGetCocktailDetailsQuery } from "../services/cocktailApi";
import {
  BackToFlavors,
  CTDetailsContainer,
  CTDetailsImgContainer,
  CTDetailsTitleContainer,
  Ingredients,
  IngredientsContainer,
  LogoContainer,
  Recipe,
} from "../styles/CocktailDetails.styled";
import { Loader } from "./Loader";

export const CocktailDetails = () => {
  const { idDrink } = useParams();
  const { data, isFetching } = useGetCocktailDetailsQuery(idDrink);
  const cocktail = data?.drinks;

  if (isFetching) return <Loader />;

  const portions = [
    {
      ingredient: `${cocktail[0].strIngredient1}`,
      measurement: `${cocktail[0].strMeasure1}`,
    },
    {
      ingredient: `${cocktail[0].strIngredient2}`,
      measurement: `${cocktail[0].strMeasure2}`,
    },
    {
      ingredient: `${cocktail[0].strIngredient3}`,
      measurement: `${cocktail[0].strMeasure3}`,
    },
    {
      ingredient: `${cocktail[0].strIngredient3}`,
      measurement: `${cocktail[0].strMeasure3}`,
    },
    {
      ingredient: `${cocktail[0].strIngredient4}`,
      measurement: `${cocktail[0].strMeasure4}`,
    },
    {
      ingredient: `${cocktail[0].strIngredient5}`,
      measurement: `${cocktail[0].strMeasure5}`,
    },
    {
      ingredient: `${cocktail[0].strIngredient6}`,
      measurement: `${cocktail[0].strMeasure6}`,
    },
    {
      ingredient: `${cocktail[0].strIngredient8}`,
      measurement: `${cocktail[0].strMeasure8}`,
    },
    {
      ingredient: `${cocktail[0].strIngredient9}`,
      measurement: `${cocktail[0].strMeasure9}`,
    },
  ];

  return (
    <>
      <BackToFlavors>
        <Link to="/">BACK TO FLAVOUR</Link>
      </BackToFlavors>
      <CTDetailsContainer>
        <CTDetailsImgContainer>
          <div>
            <img src={cocktail[0].strDrinkThumb} alt="" />
          </div>
        </CTDetailsImgContainer>
        <CTDetailsTitleContainer>
          <div className="title">
            <h1>{cocktail[0].strDrink}</h1>
            <p>{cocktail[0].strIBA} </p>
          </div>
          <div className="info">
            <h2>
              Unlocking
              <br /> the original
              <br /> spirit
            </h2>
          </div>
        </CTDetailsTitleContainer>
      </CTDetailsContainer>
      <IngredientsContainer>
        <Ingredients>
          <h1>{cocktail[0].strDrink}</h1>
          <div className="ingredient-info">
            {portions.map((item, index) =>
              item.ingredient !== "null" || item.measurement !== "null" ? (
                <div key={index + Math.random()}>
                  <div className="portions">
                    <p>{item.ingredient}</p>
                    <p>{item.measurement}</p>
                  </div>
                  <hr />
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </Ingredients>
        <Recipe>
          <div className="recipe">
            <h1>Recipe</h1>
            <p>{cocktail[0].strInstructions}</p>
          </div>
        </Recipe>
      </IngredientsContainer>
      <LogoContainer />
    </>
  );
};
