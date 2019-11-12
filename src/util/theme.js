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
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Open Sans", sans-serif',
    fontStyle: 'regular',
    color: '#c5c1b9',
    fontSize: 19,
    lineHeight: 1.4,
    maxWidth: 640,
    fontWeightLight: 300,
  },
  // MuiLink: {
  //   color: '#ef6474',
  // }
});

theme = responsiveFontSizes(theme);

export default theme;
