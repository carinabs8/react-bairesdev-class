import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/joy/Chip';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Modal } from '../../../Modal';
import { RequestDetailedStory } from './RequestDetailedStory';

import { newYorkSelector } from '../../../../redux/selectors';

interface DetailedNewYorkStoryType {
  displayModal: boolean,
  setDisplayModal: (displayModal: boolean) => void,
};

export const DetailedNewYorkStory = ({displayModal, setDisplayModal}: DetailedNewYorkStoryType) => {
  const handleClose = () => setDisplayModal(false);
  const [displayInternalModal, setDisplayInternalModal] = useState<boolean>(false)

  const { multimedia: multimedias, title, section, abstract, des_facet } = useSelector(newYorkSelector, shallowEqual);

  const {caption: multimediaCaption, url: multimediaUrl} = (multimedias.length >= 0 ) ? multimedias[0] : {caption: '', url: ''};

  const handleDisplayInternalModal = () => {
    setDisplayInternalModal(true);
  }

  const handleDisplayInternalModalClose = (closeParentModal?:boolean) => {
    setDisplayInternalModal(false);
    if(closeParentModal) handleClose();
  }

  if(!displayModal) return null;

  return(
    <React.Fragment>
      <Modal
        open={displayModal}
        onClose={handleClose}  ariaLabelledby='New York Story' ariaDescribedby='New York Story Detail'
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={multimediaUrl}
            title={multimediaCaption}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', opacity: '50%' }}>
              {section}
            </Typography>
            <Typography gutterBottom variant="h5" component="div" >
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {abstract}
            </Typography>
            <div style={{marginTop: '5px'}}>
              {des_facet.map((item: string, key:number) => {
                return(
                  <Chip key={key}>{item}</Chip>
                )
              })}
            </div>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleDisplayInternalModal}>Share this Story</Button>
            <Button size="small" onClick={handleClose}>Close</Button>
          </CardActions>
        </Card>
      </Modal>

      <RequestDetailedStory handleOnClose={handleDisplayInternalModalClose} displayInternalModal={displayInternalModal}/>
    </React.Fragment>
  )
};
