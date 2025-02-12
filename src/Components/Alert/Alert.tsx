import React from 'react';
import Box from '@mui/material/Box';
import {default as MaterialAlert} from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export interface AlertPropsType {
  open: boolean,
  message?: string,
  severity?: SeverityType,
  variant?: VariantType
};
interface AlertType {
  alertProps: AlertPropsType,
  setAlertProps: (props: AlertPropsType) => void
};

type SeverityType = 'success' | 'error' | 'warning' | 'info' | undefined;
type VariantType = 'filled' | 'outlined' | undefined;


export const Alert = (params: AlertType) => {
  const { alertProps, setAlertProps } = params;
  const { open, severity, message, variant } = alertProps;

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <MaterialAlert
          severity={severity}
          variant={variant}
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
          {message}
        </MaterialAlert>
      </Collapse>
    </Box>
  );
};
