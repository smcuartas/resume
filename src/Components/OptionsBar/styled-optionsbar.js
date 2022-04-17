import styled from "styled-components";

export const OptionBar = styled.div`
    position:fixed;
    bottom:10px;
    right:10px;
    z-index:10;
    padding:16px;
    background:white;
    border-radius:50px;
    box-shadow:0 0 15px rgba(0,0,0,.15);
    display:flex;
    align-items:center;

    & div:not(:last-child){
        border-right:1px solid #7d7d7d;
    }
`

export const selectLanguage = styled.div`
    display:flex;
    align-items:center;

    & span{
        margin:0 10px;
        cursor:pointer;
        text-transform:uppercase;
        letter-spacing:2px;
        color:#414040;
        opacity:.5;
        transition-duration:.3s;
    }

    & svg{
        width:12px;
    }

    & .activeLanguage,
    & span:hover{
        color: #121212;
        opacity:1;
    }
` 

export const ClicktoChat = styled.div`
    margin:0 10px;

    & a{
        display:flex;
        align-items:center;
        opacity:1;
    }
`