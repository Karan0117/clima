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
        --border-radius: 10px 0 0 10px;
        --border: 10px;

        /* font weights */
        --bold: 700;
        --semi-bold: 600;
        --medium: 500;
        --regular: 400;

    }

    html{
        font-size: 62.5%;
    }

    body{
        font-family: var(--font);
    }
    h1{
        font-size: 5rem;
    }
    h2{
        font-size: 4.5rem;
    }
    h3{
        font-size: 4rem;
    }
    h4{
        font-size: 3.6rem;
        font-weight: var(--semi-bold);
    }
    h5{
        font-size: 2.4rem;
    }
    p{
        font-size: 1.6rem;
    }
    p.description{
        font-size: 2.4rem;
        /* font-weight: var(--regular); */
    }
    p.temp-numerics{
        font-size: 8rem;
        font-weight: var(----semi-bold);
        line-height: 8rem;
    }
    p.secondary-value{
        font-size: 4.8rem
    }
    p.secondary-label{
        opacity: 0.8;
    }

    .favorite-city{
            fill: #656565;
    }
`;

export default GlobalStyles;
