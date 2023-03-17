import { createTheme } from '@mui/material/styles';

const primaryTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ee2326',
      light: '#161616',
    },
    secondary: {
      main: '#444444',
      light: '#666666',
      dark: '#333333',
    },
    background: {
      paper: '#fff',
    },
  },
  typography: {
    'fontFamily': `'Lato', sans-serif`,
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#333',
        color: '#fff',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
  },
});

export default primaryTheme;