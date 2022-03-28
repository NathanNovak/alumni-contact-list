import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Registration from './Registration';
import SignIn from './SignIn';

export default function ButtonAppBar() {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar style={{backgroundColor: 'black', height: 100, justifyContent: 'center'}} position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{mr: 2}}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant='h5' component='div' sx={{flexGrow: 1, backgroundColor: 'black'}}>
            News
          </Typography>
          <Registration/>
          <SignIn/>
        </Toolbar>
      </AppBar>
    </Box>
);
}
