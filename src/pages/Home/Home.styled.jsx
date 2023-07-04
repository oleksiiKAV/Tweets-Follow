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

export const Svg = styled.img``;
export const Text = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  background: linear-gradient(to right, #ff0000, #00ff00, #0000ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;