import styled from "styled-components";

export const HomepageContainer = styled.main`
  margin: 0 auto;
  width: 1200px;

  @media (max-width: 768px){
  width: 360px;
}
`;

export const CocktailsSecion = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  margin-top: 50px;

  @media (max-width: 768px){
  gap:50px;
}


`;

export const StyledMidSection = styled.section`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 80px;

 
`;

export const MidSectionList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  width: 100%;
  
  @media (max-width: 768px){
  justify-content:start;

}

input{
  background:rgb(0,0,47);
  border:2px solid white;
  color:white;
}

  ul {
    display: flex;
    gap: 20px;
    text-transform: uppercase;

    @media (max-width: 768px){
     gap:5px;
     
}

    li {
      a {
        border: 1px solid;
        padding: 7px;
        font-size: 1.5rem;

        @media (max-width: 768px){
          font-size:0.5rem;
          padding: 0px;
          border: 0px;
          
        }

        :hover {
          border: 1px solid rgb(80, 181, 228);
          color: rgb(80, 181, 228);
          transition: all ease 300ms;
        }
      }
    }

  
      }
    }
  }
`;

export const SubMenu = styled.div`
  position: absolute;
  z-index: 100;
  background: rgba(0, 0, 47, 0.9);
  display: none;
`;
