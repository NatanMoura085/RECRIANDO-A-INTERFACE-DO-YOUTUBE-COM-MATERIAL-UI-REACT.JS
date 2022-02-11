import React from 'react';
import {ThemeProvider, createTheme,makeStyles } from '@material-ui/core';
import Home from './Home';

const useStyles = makeStyles({
root:{
  

}


})

function App() {
const theme = createTheme({
  spacing: 4, 
  palette:{
  primary:{
    main: '#f44336',

  },
  secondary:{
main:'#3f51b5',

  },
  },
});

const classes = useStyles();
  return(
  <ThemeProvider theme={theme}>
<Home>


   
</Home>


  </ThemeProvider>

  );

}
export default App



