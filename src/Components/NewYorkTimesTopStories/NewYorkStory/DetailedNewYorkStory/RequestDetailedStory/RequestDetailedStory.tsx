import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import CardContent from '@mui/material/CardContent';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';

import { Modal } from '../../../../Modal';

import { newYorkSelector, requestNewYorkStoryDetailFormSelector } from '../../../../../redux/selectors';
import { setState } from '../../../../../redux/reducers/requestNewYorkStoryDetailFormReducer';

interface RequestDetailedStoryType {
  displayInternalModal: boolean,
  handleOnClose: () => void,
};

export const RequestDetailedStory = ({
  displayInternalModal, handleOnClose
}: RequestDetailedStoryType ) => {
  const { title } = useSelector(newYorkSelector, shallowEqual);
  const formDetailed = useSelector(requestNewYorkStoryDetailFormSelector, shallowEqual);
  const ariaLabel = { 'aria-label': 'description' };
  const dispatch = useDispatch();

  const submitForm = (event:any, form:any) => {
    //SEND THE FORM
    // SHOWS THE NOTIFICATION MESSAGE
    console.log(form, "formformformformformformformformform");
    // dispatch?.(setState({...form}));
  }

  const updateForm = (event:any, form:any) => {
    const inputOjbect = JSON.parse(`{"${event.target.name}":"${event.target.value}"}`);
    const formatedForm = {...form, ...inputOjbect}
    handleDispatchForm(formatedForm)
  }
  const handleDispatchForm = useCallback((formParams:any) => {
    dispatch?.(setState({...formDetailed, ...formParams}));
  }, [dispatch, formDetailed]);

  if(formDetailed && !formDetailed?.title){ dispatch?.(setState({...formDetailed, title: title})) };

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
            <Input placeholder='Email' name='userEmail' defaultValue={formDetailed?.userEmail} onChange={(event) => updateForm(event, formDetailed)} inputProps={ariaLabel} />
            <Input placeholder='User Name' name='userName' defaultValue= {formDetailed?.userName} onChange={(event) => updateForm(event, formDetailed)} inputProps={ariaLabel} />
          </Box>
        </CardContent>

        <CardActions>
          <Button size="small" onClick={(event) => submitForm(event, formDetailed)}>Submit</Button>
          <Button size="small" onClick={handleOnClose}>Close</Button>
        </CardActions>
      </Card>
    </Modal>
  )
}