import React from 'react';

// Mui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1,1),
    padding: theme.spacing(0,1),
    display: 'inline-block',
    backgroundColor: '#c5c1b9',
    "&:hover": {
      cursor: "pointer",
      backgroundColor: '#c5c1b9',
    }
  },
  text: {
    fontSize: 14,
    margin: 0,
    padding: 0,
  }
}))

export default function Tags ({ tag, handleClick }) {
const classes = useStyles()

  return(
  <Button size="small" className={classes.root}>
    <Typography className={classes.text}>{tag}</Typography>
  </Button>
)};
