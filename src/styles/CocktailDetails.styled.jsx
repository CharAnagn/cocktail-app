import styled from "styled-components";
import Logo from "../images/logo.png";

export const CTDetailsContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  width: 1200px;
  margin-top: 60px;
  margin-bottom: 20px;

  @media (max-width: 768px){
  width:390px;
}
`;

export const CTDetailsImgContainer = styled.div`
  background: rgb(103, 155, 80);
  width: 100%;
  height: 79vh;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 79vh;
  }
`;

export const CTDetailsTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 39vh;
    background: rgb(103, 155, 80);
  }

  h1 {
    text-align: center;
    font-size: 60px;
    text-transform: uppercase;
  }

  p {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 39vh;
    background: rgb(103, 155, 80);

    h2 {
      font-size: 50px;
      letter-spacing: 5px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;

export const IngredientsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  gap: 20px;
`;

export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 50%;
  height: 80vh;
  background: rgb(103, 155, 80);
  margin-bottom: 20px;
  gap: 50px;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    margin-top: 50px;
    width: 500px;
  }

  .portions {
    display: flex;
    justify-content: space-between;
    gap: 220px;

    p {
      font-size: 15px;
      margin: 15px 0 0 0;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`;

export const Recipe = styled.div`
  justify-content: center;
  text-align: center;
  width: 50%;
  height: 80vh;
  background: white;
  gap: 50px;

  .recipe {
    border: 3px solid rgb(103, 155, 80);
    height: 70vh;
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 90%;
    margin: 30px 0 0 30px;

    h1 {
      font-size: 50px;
      margin-top: 50px;
      text-transform: uppercase;
      color: black;
    }

    P {
      text-align: left;
      font-size: 1.5rem;
      margin: 0 20px 0 20px;
      color: black;
    }
  }
`;

export const LogoContainer = styled.div`
  margin: 0 auto;
  width: 1200px;
  background: rgb(103, 155, 80) url("${Logo}") center no-repeat;
  height: 35vh;
  margin-bottom: 50px;

  @media (max-width: 768px){
  width:390px;
}
`;
export const BackToFlavors = styled.div`
  height: 80px;
  margin: 0 auto;
  width: 1200px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  margin-top:80px;
  border-bottom: 2px solid white;

  @media (max-width: 768px){
  width:390px;
}

  a {
    font-size: 1.7rem;
    text-transform: uppercase;
    color: white;
    letter-spacing: 1px;
    margin: 0.2rem 0.7rem;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0%;
      background: rgb(80, 181, 228);
      transition: all ease-in-out 300ms;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
`;
