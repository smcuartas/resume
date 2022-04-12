import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-image:linear-gradient(to bottom, #414040, #121212);
        padding:72px;
    }

    *{
        margin:0;
        padding:0;
        font-family: 'Karla', sans-serif;
    }

    h1,
    h2,
    h3{
        color:#2b2b2b;
    }

    h1{
        font-size:31px;
        font-weight:bold;
    }

    h2{
        font-size:28px;
        font-weight:500;
        text-transform:uppercase;
    }

    h3{
        font-size:20px;
    }

    p{
        font-size:18px;
        color: #7d7d7d;
    }

    .align-right{
        text-align:right;
    }

    .no-margin{
        margin:0;
    }

    .mb-15{
        margin-bottom:15px;
    }

    @media(max-width:992px){
        body{
            padding:32px;
        }
    }

    @media(max-width:767px){
        body{
            padding:24px;
        }

        .align-right{
            text-align:left;
            margin-top:16px;
        }
    }
`

export default GlobalStyle