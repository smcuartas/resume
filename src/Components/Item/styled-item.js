import styled from "styled-components";

export const ItemCard = styled.span`
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

    &:hover{
        border-image-source: linear-gradient(90deg, #FAC0D1, #D3F2FD, #D9DDFF);
        color:#7d7d7d;
        background:transparent;
    }
`