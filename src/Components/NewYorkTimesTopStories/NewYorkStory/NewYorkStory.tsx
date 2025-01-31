import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { DetailedNewYorkStory } from './DetailedNewYorkStory';

import { StoryType } from '../../../Types';

interface NewYorkStoryType {
  story: StoryType;
  id: number;
};

const detailedNewYorkStory = (event: React.MouseEvent<HTMLElement>, setDisplayModal: (displayModal: boolean) => void, story: StoryType) => {
  setDisplayModal(true)
}

export const NewYorkStory = (params: NewYorkStoryType) => {
  const {story, story: {section, multimedia, title}, id } = params;
  const {caption: multimediaCaption, url: multimediaUrl} = multimedia[0];
  const [displayModal, setDisplayModal] = useState(false);

  return(
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }} key={id}>
        <CardMedia
          sx={{ height: 140 }}
          image={multimediaUrl} title={multimediaCaption}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${section}`}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={(event) => detailedNewYorkStory(event, setDisplayModal, story)}>Check it out</Button>
        </CardActions>
      </Card>
      { displayModal && <DetailedNewYorkStory story={story} displayModal={displayModal} setDisplayModal={setDisplayModal}/> }
    </React.Fragment>
  );
};
