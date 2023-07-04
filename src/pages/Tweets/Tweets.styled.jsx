import styled from 'styled-components';

export const Main = styled.main`
  min-height: 75vh;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const Text = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  background: linear-gradient(to right, #ff0000, #00ff00, #0000ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;