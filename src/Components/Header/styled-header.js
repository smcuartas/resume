import styled from 'styled-components'

export const Header = styled.header`
  display: block;
  padding: 72px;
  border-bottom: 1px solid #dbdbdb;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 72px 32px;
  }
`

export const Position = styled.p`
  font-size: 24px;
  display: block;
  letter-spacing: 0px;
  white-space: nowrap;
  border-right: 2px solid;
  width: 18ch;
  animation: typing 1s steps(21), blink 0.5s infinite step-end alternate;
  overflow: hidden;

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`

export const HeaderCol = styled.div`
  margin: auto 0;

  & a {
    color: #7d7d7d;
    transition-duration: 0.3s;
  }

  @media (max-width: 767px) {
    margin-top: 16px;
  }
`
