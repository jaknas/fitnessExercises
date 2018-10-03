import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { red, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber[500],
      light: amber[200],
      dark: amber[700]
    },
    type: 'dark'
  },
  spacing: {
    unit: 10
  }
});

const rootElement = document.getElementById('root');
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  rootElement
);
