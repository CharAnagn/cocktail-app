import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html{
    scroll-behavior: smooth;
    color:white;
    background:rgb(0,0,47);
}

a{
    text-decoration:none;
    color:white;
}

ul{
    list-style:none;
}

hr{
    background:white;
    border:0;
    height:2px;
}

.navbar{
    margin: 0 auto;
    width:1200px;
}

h1,h2,h3,p,a{
    font-family: 'BioRhyme', serif;
}
`