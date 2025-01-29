import React, { useState, useEffect } from 'react';

import { topStories } from './utils'

import Box from '@mui/material/Box';

import { StoryType } from '../../Types';
import { NewYorkStory } from './NewYorkStory';

export const NewYorkTimesTopStories = () => {
  const [topStoriesHome, setTopStoriesHome] = useState<[]|null>(null);

  useEffect(() => {
    topStories({setTopStoriesHome});
  }, []);
  if(!topStoriesHome) return null;

  return(
    <React.Fragment>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
          gap: 2,
        }}
      >
      {
        topStoriesHome.map((story:StoryType, key:number) => {
          return(
            <NewYorkStory story={story} key={key}/>
          )
        })
      }
      </Box>
    </React.Fragment>
  )
};
