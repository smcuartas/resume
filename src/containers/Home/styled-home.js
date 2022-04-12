import styled from "styled-components";

export const Mask = styled.div`
    width:100%;
    background:white;
    position:relative;
    overflow:hidden;
    z-index:1;
`

export const Container = styled.div`
    width:100%;
    display:block;
    z-index:10;
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

    @media(max-width:992px){
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
    text-decoration:none;

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