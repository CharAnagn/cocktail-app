import { GlobalStyles } from "./styles/Globals.styled";
import { Homepage } from "./views/Homepage"
import { CocktailDetails } from "./components/CocktailDetails";
import {Navbar} from "./components/layout/Navbar"
import {Routes, Route} from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Mocktails } from "./components/Mocktails";
import { RandomCocktail } from "./components/RandomCocktail";
import { MostPopular } from "./components/MostPopular";
import { LatestCocktails } from "./components/LatestCocktails";


  const App = () => {
  return (
    <>
    <GlobalStyles />
    <div className="navbar">
      <Navbar />
    </div>

    <div className="routes">
    <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
      <Routes>
        <Route path="/drinks/:idDrink" element={<CocktailDetails />} />
      </Routes>
      <Routes>
        <Route path="/mocktails" element={<Mocktails/>} />
      </Routes>
      <Routes>
        <Route path="/most-popular" element={<MostPopular />} />
      </Routes>
      <Routes>
        <Route path="/latest-cocktails" element={<LatestCocktails />} />
      </Routes>
      
    </div>
      
      <Footer />
    </>
  );
}

export default App;
