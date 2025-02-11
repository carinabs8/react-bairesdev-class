import React from 'react';
import Box from '@mui/material/Box';
import {default as MaterialAlert} from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export interface AlertPropsType {
  open: boolean,
  severity?: SeverityType
}
interface AlertType {
  alertProps: AlertPropsType,
  setAlertProps: (props: AlertPropsType) => void
}

type SeverityType = 'success' | 'error' | 'warning' | 'info' | undefined;

export const Alert = (params: AlertType) => {
  const { alertProps, setAlertProps } = params;
  const { open, severity } = alertProps;

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <MaterialAlert
          severity={severity} 
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertProps({open: false, severity: severity});
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Click the close icon to see the Collapse transition in action!
        </MaterialAlert>
      </Collapse>
    </Box>
  );
};
