import React from 'react';
import { render } from 'react-dom';
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

import(/* webpackChunkName: 'app' */ './components/App').then(
  ({ default: App }) =>
    render(
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>,
      document.getElementById('root')
    )
);
