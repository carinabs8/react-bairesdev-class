import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import CardContent from '@mui/material/CardContent';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';

import { Modal } from '../../../../Modal';

import { newYorkSelector } from '../../../../../redux/selectors';


interface RequestDetailedStoryType {
  displayInternalModal: boolean,
  handleOnClose: () => void,
};

export const RequestDetailedStory = ({
  displayInternalModal, handleOnClose
}: RequestDetailedStoryType ) => {
  const { title } = useSelector(newYorkSelector, shallowEqual);
  const ariaLabel = { 'aria-label': 'description' };

  return(
    <Modal open={displayInternalModal}
      onClose={handleOnClose} ariaLabelledby='New York Story' ariaDescribedby='New York Story Form'>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
              {title}
            </Typography>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1 } }}
            noValidate
            autoComplete="off"
          >
            <Input placeholder='Email' inputProps={ariaLabel} />
            <Input placeholder='Name' inputProps={ariaLabel} />
          </Box>
        </CardContent>

        <CardActions>
          <Button size="small">Submit</Button>
          <Button size="small" onClick={handleOnClose}>Close</Button>
        </CardActions>
      </Card>
    </Modal>
  )
}