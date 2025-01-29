import axios from 'axios';

type TopStoriesType = {
  setTopStoriesHome: (data:any)=> void
};

const baseUrl = 'https://api.nytimes.com/svc/topstories/v2';
const apiKey = process.env.REACT_APP_NEW_YORK_TIMES_API_KEY;

export const topStories = (params:TopStoriesType) => {
  const { setTopStoriesHome } = params;

  axios.get(`${baseUrl}/arts.json`, {
    params: {
      'api-key': apiKey
    }
  })
  .then(function (response) {
    const { data: { results: responseResults }} = response;
    setTopStoriesHome(responseResults)
  })
  .catch(function (error) {
    console.log(error);
  });
}