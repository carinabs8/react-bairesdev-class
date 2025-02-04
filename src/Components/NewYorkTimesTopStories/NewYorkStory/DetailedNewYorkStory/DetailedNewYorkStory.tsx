import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/joy/Chip';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { newYorkSelector } from '../../../../redux/selectors'

interface DetailedNewYorkStoryType {
  displayModal: boolean,
  setDisplayModal: (displayModal: boolean) => void,
};

export const DetailedNewYorkStory = ({displayModal, setDisplayModal}: DetailedNewYorkStoryType) => {
  const handleClose = () => setDisplayModal(false);

  const { multimedia: multimedias, title, section, abstract, des_facet } = useSelector(newYorkSelector, shallowEqual);

  const {caption: multimediaCaption, url: multimediaUrl} = multimedias[0];

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  if(!displayModal) return null;

  return(
    <React.Fragment>
      <Modal
        open={displayModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
              <Button size="small" onClick={handleClose}>Close</Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </React.Fragment>
  )
};
