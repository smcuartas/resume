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

    @media(max-width:767px){
        &{
            grid-template-columns:repeat(1, 1fr);
            grid-gap:24px;
        }
    }
`

export const DownloadRow = styled.div`
    padding:72px;
    background:#fafafa;
    display:grid;
    grid-gap:72px;
    grid-template-columns:28% 1fr;
    margin:auto 0;

    @media(max-width:767px){
        grid-template-columns:repeat(1,1fr);
        grid-gap:24px;
    }

    & h2{
        margin:auto 0;
    }
`

export const DownloadButton = styled.a`
    width:fit-content;
    background:#7D7D7D;
    color:white;
    font-size:20px;
    padding:8px;
    border: 10px solid #7d7d7d;
    border-image-slice: 1;
    border-width: 2px;
    transition-duration:.3s;
    cursor:pointer;
    text-align:center;
    display:flex;

    & span:last-child{
        display:flex;
        margin-left:8px;
        fill:white;
        transition-duration:.3s;
        position:relative;
        width:20px;
        height:23px;
    }

    & svg{
        width:20px;
    }

    & svg:first-child{
        position:absolute;
        top:0;
    }

    & svg:last-child{
        bottom:0;
    }

    &:hover svg{
        fill: #7d7d7d;
    }

    &:hover svg:first-child{
        animation:toTop 1s infinite;
    }

    @keyframes toTop{
        0%{top:0}
        50%{top:-5px}
        100%{top:0}
    }

    &:hover{
        border-image-source: linear-gradient(90deg, #FAC0D1, #D3F2FD, #D9DDFF);
        color:#7d7d7d;
        background:transparent;
        transform:scale(1.1);
    } 
`

export const GlobalStyle = createGlobalStyle`
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