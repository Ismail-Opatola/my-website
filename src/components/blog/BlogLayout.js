import React from 'react';
import { graphql } from 'gatsby';
import clsx from 'clsx';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// Blog components
import Searchbar from '../Searchbar';
import Tags from '../Tags';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1300px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '900px',
    },
    margin: 'auto',
    padding: theme.spacing(4, 2),
    color: '#c5c1b9',
    boxSizing: 'border-box',
  },

  aside: {
    position: 'relative',
    flexShrink: 1,
    padding: theme.spacing(8, 2),
  },
}));

export default function BlogLayout({ children, ...props }) {
  const classes = useStyles();

  return (
      <Grid container spacing={6} className={classes.root} component="section">
        <Grid item xs={12} lg={8} component="section">
          {children}
        </Grid>

        <Grid item xs={12} lg={4} component="aside" className={classes.aside}>
          <Searchbar />
          {['React', 'Node', 'Firebase', 'app security'].map((tag) => (
            <Tags tag={tag} />
          ))}
        </Grid>
      </Grid>
  );
}
