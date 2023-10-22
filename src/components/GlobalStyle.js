import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
font-family: "DM Sans", sans-serif;
font-size: 16px;
line-height: 1.5;
}

ul,li,h1,h2,h3,h4,h5,h6,p {
  font-family: inherit;
   list-style: none;
   margin: 0;
   padding: 0;
}

img {
   display: block;
   max-width: 100%;
   object-fit: cover;
   height: auto;
   margin: 0 auto;
}

 a {
  font-family: inherit;
  text-decoration: none;
  display: inline-block;
 }
`;
