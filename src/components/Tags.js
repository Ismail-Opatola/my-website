import React from 'react';

// Mui
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1,1),
    padding: theme.spacing(0,1),
    display: 'inline-block',
    borderColor: theme.palette.secondary.main,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: fade(theme.palette.secondary.main, 0.1),
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
  <Button variant="outlined" size="small" className={classes.root}>
    <Typography  color="secondary" className={classes.text}>{tag}</Typography>
  </Button>
)};
