import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://badminton-league-49e71.firebaseio.com/'
});

export default instance;
