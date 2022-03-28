import {Button, MenuItem, TextField} from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {Formik, useFormik} from 'formik';
import {addContact, queryContacts} from '../firebaseConfig';

const RegistrationForm = (props) => {
  const d = new Date();

  const initialValues = {
    firstName: '',
    lastName: '',
    highSchoolLastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    year: '',
    otherYear: null,
    timestamp: d.toLocaleString(),
  };

  const formik = useFormik({
      initialValues,
      onSubmit: values => {
        // alert(JSON.stringify(values, null, 2));
        addContact(values).then(() => console.log('Contact Added'))
      },
    },
  );

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}} rowSpacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id={'firstName'}
            label={'First Name'}
            variant={'filled'}
            onChange={formik.handleChange}
            values={formik.values.firstName}
            // required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id={'lastName'}
            label='Last Name'
            variant='filled'
            onChange={formik.handleChange}
            values={formik.values.lastName}
            // required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id={'highSchoolLastName'}
            fullWidth
            label='High School Last Name'
            variant='filled'
            onChange={formik.handleChange}
            values={formik.values.highSchoolLastName}
            // required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id={'phone'}
            label='Phone'
            variant='filled'
            values={formik.values.phone}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            id={'email'}
            label='Email'
            variant='filled'
            type='email'
            values={formik.values.email}
            onChange={formik.handleChange}
            // required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id={'address'}
            label='Address'
            variant='filled'
            values={formik.values.address}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id={'city'}
            label='City'
            variant='filled'
            values={formik.values.city}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id={'state'}
            label='State'
            variant='filled'
            values={formik.values.state}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id={'zip'}
            label='Zip'
            variant='filled'
            values={formik.values.zip}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            // id={'year'}
            name={'year'}
            style={{width: '100%'}}
            variant={'filled'}
            value={formik.values.year}
            label='Year'
            select
            onChange={formik.handleChange}
          >
            <MenuItem key={1} value={'1996'}>1996</MenuItem>
            <MenuItem key={2} value={'1997'}>1997</MenuItem>
            <MenuItem key={3} value={'1998'}>1998</MenuItem>
            <MenuItem key={4} value={'other'}>Other</MenuItem>
          </TextField>
        </Grid>
        {formik.values.year === 'other' &&
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              id={'other_year'}
              label='Other Year'
              variant='filled'
              values={formik.values.otherYear}
              onChange={formik.handleChange}
            />
          </Grid>}
      </Grid>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        margin={3}
      >
        <Stack spacing={2} direction={'row'}>
        <Button
          variant='text'
          onClick={props.handleClose}
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
      </Box>
    </form>
  );
};

export default RegistrationForm;
