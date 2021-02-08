import React from "react";
import {Dialog, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import './singInDialog.css'

const SignInDialog = ({isOpen, toggleModal}) => {

  return (
    <Dialog align={"center"}
            open={isOpen} onClose={toggleModal} aria-labelledby="form-dialog-title">
      <DialogTitle>Log in</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin={"dense"}
          label={"Email"}
          type={"email"}
          fullWidth
        />
        <TextField
          autoFocus
          margin={"dense"}
          label={"Password"}
          type={"password"}
          fullWidth
        /> </DialogContent>
      <Grid container className={"modalActions"}>
        <Grid item className={'actionButton'}>
          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </Grid>
        <Grid item className={'actionButton'}>
          <Button variant="contained" color="primary" onClick={toggleModal}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Dialog>

  )
}
export default SignInDialog;

