import { Link } from "react-router-dom";
import {
  Nav,
  NavList,
  Logo,
} from "../../styles/layout/Nav.styled";
import useScrollDirection from "../../hooks/useScrollDirection";

export const Navbar = () => {
  const scrollDirection = useScrollDirection("down");
  return (
    <>
      <Nav scrollDirection={scrollDirection}>
        <div>
          <Link to="/">
            <Logo src="./images/logo.png" />
          </Link>
        </div>
        <NavList>
          <Link to="/">Cocktails</Link>

          <Link to="/mocktails">Mocktails</Link>
        </NavList>
      </Nav>
      
    </>
  );
};
