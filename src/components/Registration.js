import * as React from 'react';
import {Button} from '@mui/material';
import {useState} from 'react';
import ModalDialog from './ModalDialog';
import RegistrationForm from './RegistrationForm';

const Register = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
  <div>
    <Button variant={'text'} color={'inherit'} onClick={handleOpen}>
      Signup
    </Button>
    <ModalDialog open={open} handleClose={handleClose}>
      <RegistrationForm handleClose={handleClose}/>
    </ModalDialog>
  </div>
  )
}

export default Register;
