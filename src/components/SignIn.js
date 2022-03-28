import {useState} from 'react';

import {Button, TextField} from '@mui/material';
import ModalDialog from './ModalDialog';
import RegistrationForm from './RegistrationForm';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Formik, useFormik} from 'formik';
import {addContact} from '../firebaseConfig';
import Stack from '@mui/material/Stack';

const SignIn = () => {

  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
      initialValues: {
        userName: '',
        password: '',
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        // addContact(values).then(() => console.log('Contact Added'));
      },
    },
  );

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button variant={'text'} color={'inherit'} onClick={handleOpen}>
        Login
      </Button>
      <ModalDialog open={showModal} handleClose={handleClose}>
        <form onSubmit={formik.handleSubmit}>
        <Grid>
          <Grid item>
            <TextField
              id={'userName'}
              label={'Username'}
              value={formik.values.userName}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id={'password'}
              label={'Password'}
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
          <Stack spacing={2} direction={'row'}>
            <Button
              variant='text'
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              type='submit'
              variant='text'
              color='primary'
            >
              Submit
            </Button>
          </Stack>
        </form>
      </ModalDialog>
    </div>
  );
};


export default SignIn;
