import styled from "styled-components";

export const MostPopularSection = styled.div`
width:1200px;
margin: 0 auto;
margin-top:80px;

@media (max-width: 768px){
  width: 390px;
}
`
export const MostPopularContainer = styled.div`
display:flex;
gap:50px;
flex-wrap:wrap;
margin-top:50px;
`

export const BackToFlavors = styled.div`
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid white;

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
  
    @media (max-width: 768px){
      font-size:1.4rem;
}
  }`