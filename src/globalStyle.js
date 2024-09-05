import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html, body {
    height: 100%;
    font-family: 'Inter', sans-serif;
}
`;

export default GlobalStyle;
