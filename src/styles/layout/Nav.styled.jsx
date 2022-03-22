import styled from "styled-components";


export const Nav = styled.nav`
height: 80px;
width: 79%;
padding:0 20px;
display:flex;
align-items:center;
gap:250px;
position:fixed;
z-index:98;
transition:all 1s ease-in-out;
top:${({ scrollDirection }) => (scrollDirection === "down" ? "-80px" : "0")};
border-bottom: 3px solid white;
background:rgb(0,0,47);


@media (max-width: 768px){
  gap:15px;
  width:100%;
}
`

export const Logo = styled.img`
width:65px;
margin-left:80px;

@media (max-width: 768px){
  margin-lefT: 0px;
  width:45px;
}
`

export const NavList = styled.ul`
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
gap:80px;

@media (max-width: 768px){
  font-size:15px;
  gap:10px;
}

a{
  text-transform:uppercase;
color:white;
font-weight:700;
letter-spacing:1px;
margin:0.2rem 0.7rem;
cursor:pointer;


&::after {
    content: "";
    display: block;
    height: 3px;
    width: 0%;
    background: rgb(80,181,228);
    transition: all ease-in-out 300ms;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
}

`



