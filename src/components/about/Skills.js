import React from 'react';
import clsx from 'clsx';

import {
  makeStyles,
} from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  section4_article: {
    maxWidth: 640,
    margin: 'auto',
    paddingBottom: theme.spacing(4),
    '& h5': {
      marginBottom: theme.spacing(2),
      fontStyle: "Bold",
      fontWeight: 600,
    },
  },
  section4_li: {
    display: 'inline-block',
    paddingLeft: 0,
    width: 'auto',
    fontSize: theme.typography.fontSize,
  },
}));

const Skills = ({ skills }) => {
  const classes = useStyles();

  return (
    <>
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
      </>
  );
};

export default Skills;
