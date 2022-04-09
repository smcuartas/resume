import styled from "styled-components";

export const OptionBar = styled.div`
    position:fixed;
    bottom:10px;
    right:10px;
    padding:16px;
    background:white;
    border-radius:50px;
    box-shadow:0 0 15px rgba(0,0,0,.15);
`

export const selectLanguage = styled.div`
    display:flex;
    align-items:center;

    & span{
        margin:0 10px;
        cursor:pointer;
        text-transform:uppercase;
        letter-spacing:2px;
    }

    & svg{
        width:12px;
    }

    & span{
        color:#D9DDFF;
        font-weight:500;
        transition-duration:.3s;
    }

    & .activeLanguage,
    & span:hover{
        color: #7d7d7d;
    }
` 