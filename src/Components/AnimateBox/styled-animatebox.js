import styled from "styled-components"

export const AnimateBox = styled.div`
    position:absolute;
    top:100px;
    left:100px;
    width:50px;
    height:50px;
    animation:boxanimation 30s infinite;
    z-index:-1;
    display:flex;
    justify-content:center;

    @keyframes boxanimation{
        0%{transform:rotate(0deg)}
        100%{transform:rotate(360deg)}
    }
`

export const Animate1 = styled.div`
    width:300px;
    height:300px;
    background:#FAC0D1;
    position:absolute;
    top:-150px;
    opacity: 0.8;
    border-radius:50%;
    mix-blend-mode:multiply;
    filter:blur(40px);
`

export const Animate2 = styled.div`
    width:300px;
    height:300px;
    background:#D3F2FD;
    position:absolute;
    bottom:-200px;
    right:-200px;
    opacity: 0.8;
    border-radius:50%;
    mix-blend-mode:multiply;
    filter:blur(40px);
`

export const Animate3 = styled.div`
    width:300px;
    height:300px;
    background:#D9DDFF;
    position:absolute;
    bottom:-200px;
    left:-200px;
    opacity: 0.8;
    border-radius:50%;
    filter:blur(40px);
`