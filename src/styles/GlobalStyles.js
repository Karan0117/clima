import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --bg: linear-gradient(180deg, #99DAFF 0%, rgba(229, 237, 241, 0.66) 100%);
        --text-color:#1D1D1D;
        --main-color: #262865;
        --favorite-yellow-gold: #ffe234;
        --white: #fff;
        --header-blue: #2C7FC0;
        --toggle-bg: linear-gradient(180deg, #2074FF 0%, #262865 100%);
        --toggle-radius: 100px;
        --toggle-btn-bg: linear-gradient(180deg, #A6A8AA 17.71%, #4B4B4B 90.44%);
        --toggle-btn-border: 2px solid #262865;

        /* fonts */
        --special-font:'Berkshire Swash', cursive;
        --font: "Poppins", sans-serif;

        /* border radius */
        --border-radius: 10px;

        /* font weights */
        --bold: 700;
        --medium: 500;
        --regular: 400;

    }

    body{
        font-family: var(--font);
    }
`;

export default GlobalStyles;  