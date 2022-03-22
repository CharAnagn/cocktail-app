import styled from "styled-components";

export const MocktailsStyledSection = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px){
  width: 400px;
}
`;
export const MocktailsCardContainer = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const MocktailNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 0 20px 0;

  a {
    font-size:1.7rem;
    text-transform: uppercase;
    color: white;
    letter-spacing: 1px;
    margin: 0.2rem 0.7rem;
    cursor: pointer;

    @media (max-width: 768px){
  font-size:1rem;
}

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

  input {
    margin-right: 30px;
  }
`;