import './App.css';
import Registration from './components/Registration';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonAppBar from './components/AppBar';
import * as React from 'react';

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ButtonAppBar/>
      </ThemeProvider>
    </div>
  );
}

export default App;
