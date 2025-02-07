import React, { useState, useEffect } from 'react';
import { Children } from 'react';

import Box from '@mui/material/Box';

import { default as MaterialModal }  from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const Modal = (props:{
  children: any, open: boolean, onClose: (displayModal: boolean) => void,
  ariaLabelledby: any, ariaDescribedby: any}) => {
  const {children, open, onClose, ariaLabelledby, ariaDescribedby } = props;

  if(children.length === 0) return null;

  return(
    <React.Fragment>
      <MaterialModal open={open} onClose={onClose} aria-labelledby={ariaLabelledby} aria-describedby={ariaDescribedby}>
        <Box sx={style}>
          {Children?.map(children, child => {
            return(
              <span className="Row">
                {child}
              </span>
              )
            }
          )}
        </Box>
      </MaterialModal>
    </React.Fragment>
  )
};
