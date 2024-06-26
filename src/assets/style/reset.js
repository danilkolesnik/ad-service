import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: all .45s ease;
    outline: none;
  }
a {
  text-decoration: none;
}
h1::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px; 
}

h1::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(237,23,71, .5);
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}

body {
  background-color: #fff;
}
`;
