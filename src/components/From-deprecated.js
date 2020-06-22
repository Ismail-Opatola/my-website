import React, {
  // useState,
  // useEffect
} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import { install } from "@material-ui/styles";
// install();

const useStyles = makeStyles((theme) => ({

  root: {
      maxWidth: 620,
      color: '#c5c1b9',
      margin: 'auto',

      '& .form_text': {
        maxWidth: 620,
        margin: '0 auto',
        textAlign: 'center',
        paddingBottom: theme.spacing(6),
        '& h4': {
          fontSize: '30px',
          lineHeight: 1.1,
          fontWeight: 600,
          paddingBottom: theme.spacing(4),
        },
      },
    },
  frame: {
    width: '100%',
    height: '52.5rem',
    border: 'none',
    margin: 'auto',
    overflow: 'visible',
    fontSize: '19',

    // "& > html > body": {
    //   fontSize: theme.typography.fontSize
    // }
  },
}));

// TODO: replace google_form with custom form
const Form = () => {
  const classes = useStyles();

  // const [formSub, setFormSub] = useState(false)
  // useEffect(() => {
  //   const frameSubmitButton = window.iframe.document.getElementsByClassName(" freebirdFormviewerViewNavigationSubmitButton")
  //
  //   console.log(">>>>>>", {frameSubmitButton})
  //
  //   frameSubmitButton.addEventListener('click', () => (
  //     console.log(">>>>>>>>>> clicked me <<<<<<<<<<<<<")
  //   ))
  // })

  return (
    <Box className={classes.root}>
      <Box className="form_text">
        <Typography variant="h4" align='center'>Thank you for your time!</Typography>
        <Typography paragraph>
          Are you looking to hire or need a website, mobile application for your businnes?
          {' '}
          <b>what are you&apos;re business requirement?</b>
          {' '}
Please let me know how I could help
        </Typography>
      </Box>
      <Box
        component="iframe"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeejbddYB70tzXrp7Siv3CXFZ6FCL7-t2-HFdC1C-gOXl_z8g/viewform?embedded=true"
        className={classes.frame}
      >
        Loading…
      </Box>
    </Box>
  );
};

export default Form;


/*
quantumWizButtonEl quantumWizButtonPaperbuttonEl quantumWizButtonPaperbuttonFlat quantumWizButtonPaperbuttonDark quantumWizButtonPaperbutton2El2 freebirdFormviewerViewNavigationSubmitButton isUndragged
*/


