import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import CardContent from '@mui/material/CardContent';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';

import { Modal } from '../../../../Modal';
import { Alert, AlertPropsType } from '../../../../Alert'



import { newYorkSelector, requestNewYorkStoryDetailFormSelector } from '../../../../../redux/selectors';
import { setState } from '../../../../../redux/reducers/requestNewYorkStoryDetailFormReducer';
import { setState as setStateMainAlert} from '../../../../../redux/reducers/mainAlertReducer';

interface RequestDetailedStoryType {
  displayInternalModal: boolean,
  handleOnClose: (closeParentModal?:boolean) => void,
};

const validateForm = (form:any) => {
  let valid = true;

  Object.keys(form).forEach((key) => {
    if(!form[key]){
      valid = false;
    }
  })
  return valid;
}

export const RequestDetailedStory = ({
  displayInternalModal, handleOnClose
}: RequestDetailedStoryType ) => {
  const { title } = useSelector(newYorkSelector, shallowEqual);
  const formDetailed = useSelector(requestNewYorkStoryDetailFormSelector, shallowEqual);
  const alertDefaultProps: AlertPropsType = {open: false, severity: 'error'};

  const [ alertProps, setAlertProps ] = useState(alertDefaultProps);

  const ariaLabel = { 'aria-label': 'description' };
  const dispatch = useDispatch();

  const submitForm = (event:any, form:any) => {
    if(!validateForm(form)) return setAlertProps({...alertDefaultProps, open: true, message: 'Invalid form data'});
    
    setAlertProps({...alertDefaultProps, open: false});
    handleOnClose(true)
    dispatch?.(setStateMainAlert({open: true, message: 'Request sent!', severity: 'info'}));
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
      onClose={(event) => handleOnClose()} ariaLabelledby='New York Story' ariaDescribedby='New York Story Form'>
      <Card sx={{ maxWidth: 345 }}>
        <Alert alertProps={alertProps} setAlertProps={setAlertProps}/>
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
          <Button size="small" onClick={(event) => handleOnClose()}>Close</Button>
        </CardActions>
      </Card>
    </Modal>
  )
}