import React from 'react'
import {makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardDescriptionContainer: {
    marginTop: '20px',
    padding: '20px 15px',
  },


  benefitsTitle: {
    fontSize: '17px',
    fontFamily: 'franklin-gothic-urw-cond, Helvetica, Arial, sans-serif'
  },
  jobFunctionDescription: {
    marginTop: '30px',
    fontSize: '17px',
    fontFamily: 'franklin-gothic-urw-cond, Helvetica, Arial, sans-serif'

  },
  jobRequirementsDescription: {
    marginTop: '30px',
    fontFamily: 'franklin-gothic-urw-cond, Helvetica, Arial, sans-serif'
  },
  jobBenefitsDescription: {
    marginTop: '30px',
    fontFamily: 'franklin-gothic-urw-cond, Helvetica, Arial, sans-serif'
  },
  organizationDescription: {
    paddingTop: '10px',
    fontFamily: 'franklin-gothic-urw-cond, Helvetica, Arial, sans-serif'
  },
}))

const JobPageJobDescriptionCard = ({job}) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.cardDescriptionContainer}>
          <span className={classes.organizationDescription}>
            {job.description}
          </span>
      <div className={classes.jobFunctionDescription}>
        {job.description}
      </div>
      <div className={classes.jobRequirementsDescription}>
        {job.description}
      </div>
      <div className={classes.jobBenefitsDescription}>
        <strong className={classes.benefitsTitle}>Benefits</strong>
        <br/>
        {job.description}
      </div>
    </Paper>
  )
}
export default JobPageJobDescriptionCard