import React from 'react';
import Dialog from '@mui/material/Dialog';
import RegistrationForm from './RegistrationForm';
import {DialogContent} from '@mui/material';

const ModalDialog = ({open, handleClose, children}) => {
  return (
    <Dialog
      maxWidth={'md'}
      open={open}
      onClose={(event, reason) => {
        if (reason !== 'backdropClick') {
          handleClose(event, reason);
        }
      }}
    >
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ModalDialog;
