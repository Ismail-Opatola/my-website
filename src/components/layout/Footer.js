import React from 'react';
// import PropTypes from 'prop-types';
import MuiLink from '@material-ui/core/Link';
import Link from '../Link';
import clsx from 'clsx';

// import PopupForm from '../PopupForm'

import {
  FaTwitter, FaMedium, FaYoutube, FaLinkedin, FaGithubAlt,
} from 'react-icons/fa';

import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#c5c1b9',
    padding: theme.spacing(4, 2, 2, 2),
  },
  footer_box1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: "wrap",
  },
  li: {
    display: 'inline-block',
    backgroundColor: lighten("#000", 0.2),
    width: 'auto',
    margin: theme.spacing(1),
    fontSize: theme.typography.fontSize,
    '&:hover ': {
      cursor: 'pointer',
    },
    '& .medium': {
      color: '#ccc',
    },
    '& .github': {
      color: 'rgb(242, 244, 246)',
    },
    '& .twitter': {
      color: 'rgb(56, 161, 243)',
    },
    '& .youtube': {
      color: 'rgb(221, 75, 57)',
    },
    '& .linkedin': {
      color: 'rgb(0, 119, 181)',
    },
  },
  fakeAssThickLine: {
    height: theme.spacing(0.5),
    width: theme.spacing(5),
    backgroundColor: lighten(theme.palette.background.default, 0.1),
    borderRadius: 30,
  },
  span: {
    '& span': {
      fontWeight: '900',
    },
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const Footer = (props) => {
  const classes = useStyles();
  // const { openFormDialog, handleCloseFormDialog} = props

  return (
    <Box component="footer">
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      {/* <PopupForm
         openFormDialog={openFormDialog}
         handleCloseFormDialog={handleCloseFormDialog}/>*/}

      <Box className={clsx(classes.footer)}>
        <Box className={classes.fakeAssThickLine} />
        <Box className={clsx(classes.footer)}>
          <Typography className={classes.span}>
            ISMAIL
            <span>OPATOLA</span>
            .IO
          </Typography>
          <List className={classes.footer_box1}>
            <ListItem className={classes.li}>
              <Button color="secondary" size="small" component={Link} to="/">
                About
              </Button>
            </ListItem>
            <ListItem className={classes.li}>
              <Button color="secondary" size="small" component={Link} to="/blog">
                Blog
              </Button>
            </ListItem>
            <ListItem className={classes.li}>
              <Button color="secondary" size="small">
                Hire Me
              </Button>
            </ListItem>
          </List>
        </Box>
        <Box className={classes.footer}>
          <Typography>SOCIAL CONNECTS!</Typography>
          <List>
            <ListItem className={classes.li}>
              <MuiLink
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <FaLinkedin size={23} />
              </MuiLink>
            </ListItem>
            <ListItem className={classes.li}>
              <MuiLink
                href="https://twitter.com/opatolaismail"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
              >
                <FaTwitter size={23} />
              </MuiLink>
            </ListItem>
            <ListItem className={classes.li}>
              <MuiLink
                href="https://github.com/Ismail-Opatola"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                <FaGithubAlt size={23} />
              </MuiLink>
            </ListItem>
            <ListItem className={classes.li}>
              <MuiLink
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube"
              >
                <FaYoutube size={23} />
              </MuiLink>
            </ListItem>
            <ListItem className={classes.li}>
              <MuiLink
                href="https://medium.com/@opatolamails"
                target="_blank"
                rel="noopener noreferrer"
                className="medium"
              >
                <FaMedium size={23} />
              </MuiLink>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
