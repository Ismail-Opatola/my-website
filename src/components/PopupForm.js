import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Form from './Form';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// TODO: replace google_form with custom form
export default function AlertDialogSlide(props) {
  const { openFormDialog, handleCloseFormDialog } = props;

  return (
    <Dialog
      open={openFormDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseFormDialog}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <Form />
      <DialogActions>
        <Button onClick={handleCloseFormDialog} color="primary">
          Disagree
        </Button>
        <Button onClick={handleCloseFormDialog} color="primary">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
