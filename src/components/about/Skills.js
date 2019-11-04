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

import StarRate from '@material-ui/icons/StarRate';

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
  section4_article: {
    maxWidth: 640,
    margin: 'auto',
    paddingBottom: theme.spacing(4),
    '& h5': {
      marginBottom: theme.spacing(2),
    },
  },
  section4_ul: {
    // display: 'flex',
    // justifyContent: "space-between",
    // alignItems: "center",
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  section4_li: {
    display: 'inline-block',
    paddingLeft: 0,
    width: 'auto',
    fontSize: 19,
  },
}));

const Skills = ({ skills }) => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={typoWrapperII}>
      <Box component="article" className={classes.section4_article}>
        <Typography component="h5" className={clsx('fonty-purple')}>
          Programming Skills
        </Typography>
        <List className={classes.section4_ul}>
          {skills.programming.map((lang) => (
            <ListItem className={classes.section4_li} key={lang}>
              {lang}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box component="article" className={classes.section4_article}>
        <Typography component="h5" className={clsx('fonty-purple')}>
          Tech Stack
        </Typography>
        <List className={classes.section4_ul}>
          {skills.techStack.map((tech) => (
            <ListItem className={classes.section4_li} key={tech}>
              {tech}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box component="article" className={classes.section4_article}>
        <Typography component="h5" className={clsx('fonty-purple')}>
          Tools
        </Typography>
        <List className={classes.section4_ul}>
          {skills.tools.map((tool) => (
            <ListItem className={classes.section4_li} key={tool}>
              {tool}
            </ListItem>
          ))}
        </List>
      </Box>
    </MuiThemeProvider>
  );
};

export default Skills;
