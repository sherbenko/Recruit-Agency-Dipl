import React from 'react'
import {CardActions, Grid, Link, makeStyles, Paper, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";
import JobPageHeadCard from "./jobPageHeadCard/jobPageHeadCard";
import JobPageJobDescriptionCard from "./jobPageJobDescriptionCard/jobPageJobDescriptionCard";
import JobPageOrganizationCard from "./jobPageOrganizationCard/jobPageOrganizationCard";

const job =
  {
    id: 1,
    name: 'Supervisory Air Traffic Control Specialist (T), Operations Supervisor',
    organization: 'Organization',
    passedHours: 12,
    location: 'Location',
    description: 'ADP is hiring an Account Manager II. The Account Manager II is responsible for developing partnerships\n' +
      'with assigned clients to ensure long-term, successful relationships for ADP by supporting and managing\n' +
      'client expectations. The Account Manager ...'
  }
const useStyles = makeStyles((theme) => ({

  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '5px'
  },
}))
const JobPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.cardsContainer}>
      <Grid item sm={12} md={8}>

        <JobPageHeadCard job={job}/>
        <JobPageJobDescriptionCard job={job}/>
      </Grid>
      <Grid item sm={12} md={4}>
        <JobPageOrganizationCard job={job}/>
      </Grid>
    </div>
  )
}
export default JobPage