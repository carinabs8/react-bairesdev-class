import React from 'react';
import { Children } from 'react';

import Box from '@mui/material/Box';

import { default as MaterialModal }  from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

interface ModalPropsType {
  children?: React.ReactNode,
  open: boolean,
  onClose: (displayModal: boolean) => void,
  ariaLabelledby?: string,
  ariaDescribedby?: string
}

export const Modal = (props: ModalPropsType) => {
  const { children, open, onClose, ariaLabelledby, ariaDescribedby} = props;

  if(!children) return null;

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
