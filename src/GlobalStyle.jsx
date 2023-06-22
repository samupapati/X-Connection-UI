import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --gray1: #F2F2F2;
        --gray2: #F8F8F8;
        --green1: #73E34D;
        --green2: #2B8D42;
        --font1: #2D2929;
        --font2: #888888;
        --font-placeholder: #BABABA;
        --white: white;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Hind Siliguri';
        font-weight: 400;
    }

    body{
        overflow-x: hidden;
        &::-webkit-scrollbar{
            display: none;
        }
    }

    ::-webkit-scrollbar {
      width: 5px;               /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-track {
      background: var(--gray1);        /* color of the tracking area */
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--green1);    /* color of the scroll thumb */
        border-radius: 10px;
    }
`