/* eslint-disable react/react-in-jsx-scope */
import { Main, Svg } from './Home.styled';
import twitlogo from "../../assets/tw_logo.gif";


function Home() {
  
  return (
    <Main>
      <h1 hidden>GOIT REACT TECH</h1>
      <Svg src={twitlogo} width="10%" alt="twitlogo" />
      
    </Main>
  );
}

export default Home;