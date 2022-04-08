import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Mask = styled.div`
    width:100%;
    background:white;
    position:relative;
    overflow:hidden;
`

export const AnimateBox = styled.div`
    position:absolute;
    top:50px;
    left:50px;
    width:50px;
    height:50px;
    animation:boxanimation 30s infinite;

    @keyframes boxanimation{
        0%{transform:rotate(0deg)}
        100%{transform:rotate(360deg)}
    }
`

export const Animate1 = styled.div`
    width:360px;
    height:360px;
    background:#FAC0D1;
    position:absolute;
    top:-150px;
    left:-150px;
    opacity: 0.8;
    border-radius:50%;
    mix-blend-mode:multiply;
    animation:animation1 90s infinite;

    @keyframes animation1{
        0%{transform:scale(1)}
        50%{transform:scale(1.5)}
        100%{transform:scale(1)}
    }
`

export const Animate2 = styled.div`
    width:280px;
    height:280px;
    background:#D3F2FD;
    position:absolute;
    top:0px;
    left:100px;
    opacity: 0.8;
    border-radius:50%;
    mix-blend-mode:multiply;
    animation:animation1 60s infinite;

    @keyframes animation1{
        0%{transform:scale(1)}
        50%{transform:scale(1.2)}
        100%{transform:scale(1)}
    }
`

export const Animate3 = styled.div`
    width:280px;
    height:280px;
    background:#D9DDFF;
    position:absolute;
    top:100px;
    left:0;
    opacity: 0.8;
    border-radius:50%;
    animation:animation1 30s infinite;

    @keyframes animation1{
        0%{transform:scale(1)}
        50%{transform:scale(1.2)}
        100%{transform:scale(1)}
    }
`

export const Container = styled.div`
    backdrop-filter:blur(40px);
    width:100%;
    height:100%;
    display:block;
`

export const Content = styled.div`
    padding:72px;
`

export const ContentRow = styled.div`
    display:grid;
    grid-template-columns:28% 1fr;
    grid-gap:72px;
    
    &:not(:last-child){
        margin-bottom:62px;
    }
`

export const DownloadRow = styled.div`
    padding:72px;
    background:#fafafa;
    display:grid;
    grid-template-columns:70% 1fr;
    margin:auto 0;
`

export const DownloadButton = styled.a`
    background:#7D7D7D;
    color:white;
    font-size:20px;
    padding:8px;
    display:inline-block;
    margin:0 8px 8px 0;
    border-radius:4px;
    border: 10px solid #7d7d7d;
    border-image-slice: 1;
    border-width: 2px;
    transition-duration:.3s;
    cursor:pointer;
    text-align:center;

    &:hover{
        border-image-source: linear-gradient(90deg, #FAC0D1, #D3F2FD, #D9DDFF);
        color:#7d7d7d;
        background:transparent;
        transform:scale(1.1);
    }
`

export const GlobalStyle = createGlobalStyle`
    body{
        background:#1B1919;
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
        font-size:16px;
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
`