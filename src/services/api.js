import axios from 'axios';

axios.defaults.baseURL = 'https://6486de8fbeba6297278f547e.mockapi.io/';

export const getTweets = async () => {
  try {
    const data = await axios.get(`/users`);
    // console.log(data)
    // debugger
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateTweets = async (id, followers, following) => {
  try {
    const data = await axios.put(`/users/${id}`, {
      followers,
      following,
    });
    // console.log(data)
    // debugger
    return data;
  } catch (e) {
    console.log(e);
  }
};
