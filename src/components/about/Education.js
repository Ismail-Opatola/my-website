import React from 'react';
import clsx from 'clsx';

import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

const typoWrapperII = responsiveFontSizes(
  createMuiTheme({
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
  }),
);

const useStyles = makeStyles((theme) => ({
  section3_article1: {
    maxWidth: 640,
    margin: 'auto',
    paddingBottom: theme.spacing(8),
    '& h3': {
      marginBottom: theme.spacing(5),
    },
  },
  section3_article2: {
    maxWidth: 640,
    margin: 'auto',
    paddingBottom: theme.spacing(4),
    '& h3': {
      marginBottom: theme.spacing(4),
    },
  },
  section3_ul: {},
  section3_li: {
    display: 'block',
    padding: 0,

    '& h4': {
      lineHeight: 2,
      textDecorationLine: 'underline',
      // fontStretch: "ultra-expanded",
    },
  },
}));

const Education = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={typoWrapperII}>
      <Box component="article" className={classes.section3_article1}>
        <Typography component="h3" className={clsx('fonty-purple')}>
          My journey to the web
        </Typography>
        <Typography paragraph>
          <q>
            Prior to web development, I worked as a Search Optimization Expert at
            {' '}
            <a href="/#">Bizcomtec Solutions</a>
, a Lagos based digital marketing company. A part of
            my work required tweaking website architecture for performance. Understanding the source
            code that defines the logic of client apps helped me have an edge
          </q>
        </Typography>
      </Box>
      <Box component="article" className={classes.section3_article2}>
        <Typography component="h3" className={clsx('fonty-purple')}>
          Education
        </Typography>

        <List className={classes.section3_ul}>
          <ListItem className={classes.section3_li}>
            <Typography component="h4">React developer nano degree program - 2019</Typography>
            <Typography paragraph>
              Learnt React Framework in 2019 after sharing this Udacity Course Material for free
              with a friend. While taking this course I built three capstone projects -
              {' '}
              <a href="/#">Would-You-Rather app</a>
,
              <a href="/#">Fit-Tracker</a>
,
              {' '}
              <a href="/#">Book-Reads</a>
.
            </Typography>
          </ListItem>
          <ListItem className={classes.section3_li}>
            <Typography component="h4">The Web Developer Bootcamp - 2018</Typography>
            <Typography paragraph>
              The foundation of my web development skills. Taking this Udemy course I was introduced
              to how the web works, computer science concepts, programming languages, web
              application security, Relational and Non-relational database. I built a
              {' '}
              <a href="/#">Campground Express App</a>
              {' '}
hosted on Heroku..
            </Typography>
          </ListItem>
          <ListItem className={classes.section3_li}>
            <Typography component="h4">Diploma in Digital Marketing - 2016</Typography>
            <Typography paragraph>
              The foundation of my digital marketing skills. Taking this Shaw Academy course I was
              introduce to Search Marketing, Search Engine Optimization, Digital marketing
              ecosystem.
            </Typography>
          </ListItem>
          <ListItem className={classes.section3_li}>
            <Typography component="h4">BSc Accounting - 2013</Typography>
            <Typography paragraph>Yes, I'm an Accounting graduate turned developer !</Typography>
          </ListItem>
        </List>
      </Box>
    </MuiThemeProvider>
  );
};
export default Education;
