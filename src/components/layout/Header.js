import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Link,
} from 'gatsby';

import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  darken
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Notes from '@material-ui/icons/Notes';
import Work from '@material-ui/icons/Work';

import '../../styles/index.scss';

const logoText = responsiveFontSizes(
  createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily: '"Audiowide", cursive',
      fontSize: 18,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      color: '#193F4C',
    },
  }),
);
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: darken(theme.palette.background.default, .2),
  },
  menuButton: {
    position: 'absolute',
    backgroundColor: theme.palette.background.default,
    borderRadius: '0px',
    minheight: '100%',
    height: '100%',
    maxWidth: 65,
    width: '100%',
    '&:hover svg': {
      transform: 'rotate(-6deg)',
    },
  },
  title: {
    flexGrow: 1,
    color: '#193F4C',
    '-webkit-text-stroke-width': '1px',
    '-webkit-text-stroke-color': '#09C4FF',
    marginLeft: theme.spacing(10),
  },
  btn: {
    flexShrink: 1,
    fontSize: 8,
    fontWeight: 900,
    color: theme.palette.text.secondary,
    borderColor:  theme.palette.text.secondary,
    margin: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(5),
      fontSize: 10,
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(10),
      fontSize: 14,
      fontWeight: 600,
    },
    textWrap: 'nowrap',
  },
}));

function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  const { children } = props;

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const {
    toggleDrawer,
    // handleOpenFormDialog
  } = props;

  const mixedClasses = clsx(classes.title, 'ld ldt-float-up-in');
  const mixedClassesBtn = clsx(classes.btn, 'ld ldt-slide-right-in x1');

  const handleSidebar = () => toggleDrawer('left', true);

  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const matches_sm = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
      <>
        <HideOnScroll {...props}>
          <AppBar position="fixed" className={classes.root}>
            <Toolbar disableGutters>
              <IconButton
                className={classes.menuButton}
                aria-label="menu"
                onClick={handleSidebar()}
              >
                <Notes className="navIcon" />
              </IconButton>
              <MuiThemeProvider theme={logoText}>
                <Typography variant="h6" className={mixedClasses}>
                  {matches_sm ? 'ISMAIL O.' : 'ISMAIL OPATOLA'}
                </Typography>
              </MuiThemeProvider>
              <Button
                // color="primary"
                component={Link}
                variant="outlined"
                size="small"
                className={mixedClassesBtn}
                startIcon={matches ? <Work /> : null}
                to="/#contact-form"
              >
                Hire me
              </Button>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar id="back-to-top-anchor" />
      </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  toggleDrawer: PropTypes.func
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;


