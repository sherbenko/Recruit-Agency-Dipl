import React from "react";
import {makeStyles, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  infoCardContainer:{
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    minHeight:'200px',
    marginTop:'10px',
    marginBottom:'20px'

  },
  verticalLine:{
    borderLeft: '6px solid #3f51b5',
    height: '100px',
    borderRadius:'3px'
  },
  // fix name
  title:{
    fontWeight: '500',
    fontSize: '28px',
    fontFamily: 'Oswald, sans-serif',
  }

}));
const AppliedJobsInfoCard = () => {
  const classes = useStyles();

  return(
    <Paper className={classes.infoCardContainer}>
      <div>
        <span className={classes.title}>Invitations</span>
        <Typography variant="h4" component="h2" align={'center'}>
          21
        </Typography>
      </div>
      <div className={classes.verticalLine}/>
      <div>
        <span className={classes.title}>Rejected</span>
        <Typography variant="h4" component="h2" align={'center'}>
          11
        </Typography>
      </div>
    </Paper>
  )
}
export default AppliedJobsInfoCard