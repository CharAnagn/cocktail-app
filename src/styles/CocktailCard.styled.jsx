import styled from "styled-components";
import { keyframes } from "styled-components";

const resize = keyframes `
0%{
  opacity:0;
  transform: translate(0px;)
}
50%{
  width:0.5;
  transform: translate(50px;)
}

100%{
  opacity: 1;
  transform: translate(100px;)
}
`

export const CTCardContainer = styled.section`
display:flex;

justify-content:center;
animation:${resize} 1s ease;
 
`;

export const CTCardOuter = styled.div`
  border: 1px solid white;
  width: 90%;
  height: 50vh;
  position: relative;
  display: flex;
  text-align: center;
  
  
  

  &:hover{
    img{
      padding: 5px;
      transition: all ease-in-out 0.5s;
    }
  }
`;

export const CTCardTittle = styled.h1`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size:1.2rem;
  text-shadow: 3px 3px black;
  `;

export const CTCardImage = styled.img`
  object-fit: cover;
  width: 95%;
  height: 50vh;
  padding: 10px;
  border-radius:5px;
`;
