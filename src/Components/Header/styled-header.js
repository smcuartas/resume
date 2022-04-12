import styled from "styled-components";

export const Header = styled.header`
    display:block;
    padding:72px;
    border-bottom:1px solid #DBDBDB;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    
    @media(max-width:767px){
        grid-template-columns:repeat(1,1fr);
    }
`

export const Position = styled.p`
    font-size:24px;
`

export const HeaderCol = styled.div`
    margin:auto 0;

    & a{
        color:#D9DDFF;
        transition-duration:.3s;
    }

    @media(max-width:767px){
        margin-top:16px;

        & a{
            color:#7d7d7d;
        }
    }
`