import { keyframes } from 'styled-components';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background-image: url(${logo});
  background-repeat: repeat;
  background-size: 200px;
  background-position: 10px 10px;
`;

export const Svg = styled.img`
border-radius:50%;
width: 10%;
  height: 10%;
  animation: scaleAnimation 2s ease-in-out;

  @keyframes scaleAnimation {
    0% {
      width: 10%;
      height: 10%;
    }
    100% {
      width: 30%;
      height: 30%;
    }    
  }
`;
