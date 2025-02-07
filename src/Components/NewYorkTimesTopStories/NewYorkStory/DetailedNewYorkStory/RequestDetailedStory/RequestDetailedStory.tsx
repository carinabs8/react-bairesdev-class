import React, { useState, useEffect } from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Modal } from '../../../../Modal';

interface RequestDetailedStoryType {
  displayInternalModal: boolean,
  handleDisplayInternalModalClose: (displayModal: boolean) => void,
  setDisplayInternalModal: (displayModal: boolean) => void,
};

export const RequestDetailedStory = ({
  displayInternalModal, setDisplayInternalModal, handleDisplayInternalModalClose
}: RequestDetailedStoryType ) => {
  const mediaUrl = null;

  return(
    <Modal open={displayInternalModal}
      onClose={handleDisplayInternalModalClose}
      ariaLabelledby="modal-modal-title"
      ariaDescribedby="modal-modal-description">
      <Card sx={{ maxWidth: 345 }}>
        {
          mediaUrl ? <CardMedia
                 sx={{ height: 140 }}
                 image={mediaUrl}
                 title='Title'
               /> : null
        }
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', opacity: '50%' }}>
            lnmlknk
          </Typography>
        </CardContent>
      </Card>
    </Modal>
  )
}