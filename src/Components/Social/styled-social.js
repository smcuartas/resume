import styled from "styled-components";

export const SocialIcon = styled.span`
    display:inline-block;
    width:34px;
    height:34px;
    color:red;
    margin-right:8px;

    & svg{
        width:30px;
        transition-duration:.3s;
        overflow:hidden !important;
        border-radius:50%;
        transform:scale(1);
        fill:#7d7d7d;
        border:2px solid transparent;
    }

    &:hover .github path{
        fill:${props => props.hoverColor};
    }

    &:hover svg{
        transform:scale(1.2);
        fill:transparent;
        border-radius:0;
        border-image-slice: 1;
        border-width: 2px;
        border-image-source: linear-gradient(90deg, #FAC0D1, #D3F2FD, #D9DDFF);
        color:#7d7d7d;
        background:transparent;
    }

    &:hover .linkedin,
    &:hover .instagram{
        background:${props => props.hoverColor};
    }

    &:hover svg.linkedin,
    &:hover svg.instagram {
        fill:white;
    }


`