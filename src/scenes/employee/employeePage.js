import React from "react";
import {
  Grid,
  makeStyles,
} from "@material-ui/core";

import ContactInformation from "./contactInformation/contactInformation";
import ProfileHeader from "./profileHeader/profileHeader";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '80%',
    margin: '0 auto',
      [theme.breakpoints.down('xs')]: {
        width: '95%',
        padding:'5px 7px 5px'
},

  }
}));

const EmployeePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <ProfileHeader/>
      <Grid container>
        <Grid item xs={12} md={12}>
          <ContactInformation/>
        </Grid>
      </Grid>

    </div>
  )
}
export default EmployeePage