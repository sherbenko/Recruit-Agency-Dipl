import React from "react";
import {
  Grid,
} from "@material-ui/core";

import ContactInformation from "./contactInformation/contactInformation";
import ProfileHeader from "./profileHeader/profileHeader";
import SkillInformation from "./skillInformation/skillInformation";
import EmploymentPreferences from "./employmentPreferences/employmentPreferences";


const EmployeePage = () => {
  return (
    <>
      <ProfileHeader/>
      <Grid container>
        <Grid item xs={12} md={12}>
          <ContactInformation/>
          <SkillInformation/>
          <EmploymentPreferences/>
        </Grid>
      </Grid>
    </>
  )
}
export default EmployeePage