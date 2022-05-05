import styled from 'styled-components'

import imgAppointments from '../../assets/img/vet-appointments.jpg'
import imgExpenses from '../../assets/img/expenses-controller.jpg'

const itemImg = [null, imgAppointments, imgExpenses]

export const ProjectContainer = styled.div`
  background-image: url(${(props) => (props.pos ? itemImg[props.pos] : null)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  position: relative;
`

export const ProjectContent = styled.div`
  opacity: 0;
  transition-duration: 0.3s;
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;

  :after {
    content: '';
    width: 100%;
    height: 3px;
    background: #7d7d7d;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  :hover {
    opacity: 1;
    backdrop-filter: blur(3px);
  }

  .viewmore {
    width: 30px;
    height: 30px;
    display: block;
    border-radius: 50%;
    transition-duration: 0.3s;
    border: 2px solid transparent;
  }

  .viewmore .background {
    fill: #7d7d7d;
  }

  .viewmore path:not(.background) {
    stroke: white;
  }

  .viewmore:hover .line {
    stroke: #fac0d1;
  }

  svg:not(.viewmore) {
    width: 30px;
    height: 30px;
    fill: #7d7d7d;
    display: inline;
    border-radius: 50%;
    transition-duration: 0.3s;
    border: 2px solid transparent;
  }

  svg:last-child {
    margin-left: 5px;
  }

  svg path {
    transition-duration: 0.3s;
  }

  svg:hover:not(.viewmore) path {
    fill: #fac0d1;
  }

  svg:hover,
  .viewmore:hover .background {
    fill: transparent;
    border-radius: 0;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: linear-gradient(90deg, #fac0d1, #d3f2fd, #d9ddff);
    transform: scale(1.2);
  }

  @media (max-width: 767px) {
    opacity: 1;
    backdrop-filter: blur(3px);
  }
`

export const Title = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 10px 15px;
  background: #7d7d7d;
  border-radius: 15px 0 0 0;

  h3 {
    font-weight: 300;
    color: white;
  }
`

export const Active = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background: #7d7d7d;
  border-radius: 50px;

  :after {
    content: '';
    position: relative;
    right: 0;
    width: 10px;
    height: 10px;
    margin-left: 5px;
    border-radius: 50%;
    animation: active 2s infinite;
  }

  @keyframes active {
    0% {
      background: transparent;
    }
    25% {
      background: #32e683;
    }
    75% {
      background: #32e683;
    }
    100% {
      background: transparent;
    }
  }
`

export const Progress = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background: #7d7d7d;
  border-radius: 50px;

  :after {
    content: '';
    position: relative;
    right: 0;
    width: 10px;
    height: 10px;
    margin-left: 5px;
    border-radius: 50%;
    animation: progress 2s infinite;
  }

  @keyframes progress {
    0% {
      background: transparent;
    }
    25% {
      background: #ff9e40;
    }
    75% {
      background: #ff9e40;
    }
    100% {
      background: transparent;
    }
  }
`
