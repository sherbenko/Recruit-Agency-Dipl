import React from "react";
import {
  Grid,
  makeStyles,
} from "@material-ui/core";

import ContactInformation from "./contactInformation/contactInformation";
import ProfileHeader from "./profileHeader/profileHeader";
import SkillInformation from "./skillInformation/skillInformation";
import EmploymentPreferences from "./employmentPreferences/employmentPreferences";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '80%',
    margin: '0 auto',
      [theme.breakpoints.down('xs')]: {
        width: '95%',
        padding:'5px 7px 5px'
},
    [theme.breakpoints.between('xs','sm')]: {
      width: '95%',
      padding:'5px 0px 5px'
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
          <SkillInformation/>
          <EmploymentPreferences/>
        </Grid>
      </Grid>

    </div>
  )
}
export default EmployeePage