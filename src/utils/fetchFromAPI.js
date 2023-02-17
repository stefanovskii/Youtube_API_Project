import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'dd12926da0msh27c87b09305633ap194a1ejsnc2236f47c047',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async(url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}