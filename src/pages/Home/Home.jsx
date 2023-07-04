/* eslint-disable react/react-in-jsx-scope */
import { Main, Svg } from './Home.styled';
import twitlogo from "../../assets/tw_logo.gif";

// import { getTweets } from "../../services/api"
// import { useState, useEffect } from 'react';

function Home() {
  // const [userCount, setUserCount] = useState(0);

  // useEffect(() => {
  //   fetchUserCount();
  // }, []);

  // const fetchUserCount = async () => {
  //   try {
  //     const response = await getTweets();
  //     const users = response.data;
  //     setUserCount(users.length);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  return (
    <Main>
      <Svg src={twitlogo} width="10%" alt="twitlogo" />
      
      {/* <Text>В текущей базе данных {userCount} количество пользователей</Text> */}
    </Main>
  );
}

export default Home;