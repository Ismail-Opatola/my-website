import { red } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
// import { fade } from "@material-ui/core/styles/colorManipulator"

import '../styles/index.scss';

// A custom theme for this app
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#100E17',
    },
    secondary: {
      main: '#ef6474',
    },
    background: {
      default: '#1F2123',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#c5c1b9',
      secondary: '#ef6474',
    },
  },
  typography: {
    useNextVariants: true,
    fontStyle: 'regular',
    lineHeight: 1.4,
    maxWidth: 640,
    fontWeightLight: 300,
    // fontSize: '100%/1.5',
    fontSize: 16,
    h1: {
      lineHeight: 1.2,
      fontSize: 2,
      fontWeight: 800,
    },
    h2: {
      fontSize: 1.5,
      fontWeight: 700,
    },
    h3: {
      fontSize: 1.4,
      fontWeight: 600,
    },
    h4: {
      fontSize: 1.3,
      fontWeight: 500,
    },
    h5: {
      fontSize: 1.2,
      fontWeight: 400,
    },
    h6: {
      fontSize: 1,
      fontWeight: 300,
    },
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'span',
        body2: 'span',
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
