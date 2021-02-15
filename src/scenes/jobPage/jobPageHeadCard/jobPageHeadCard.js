import React from 'react'
import {CardActions, Grid, makeStyles, Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({

  jobCardHeader: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px',
    justifyContent: 'space-between'
  },
  jobTitle: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '28px',
    paddingBottom: '10px',
     fontWeight: '400',

  },
  jobOrganizationTitle: {
    marginTop: '10px',
    fontSize: '20px',
    fontWeight: '100',

    fontFamily: 'Oswald, sans-serif',
    color: 'darkgrey'
  },
  applyButton: {
    // flex:'2',
    // maxHeight: '44px',
    // maxWidth: '255px',
    borderRadius: '0px',
    backgroundColor: '#c6021d',
    width: '100%',
    marginTop: '10px'
  },
  cardActions: {
    paddingTop: '10px'
  }
}))
const JobPageHeadCard = ({job}) => {
  const classes = useStyles();

  return (
    <Paper elevation={3}>
      <div className={classes.jobCardHeader}>
        <Grid>
          <div>

            <h1 className={classes.jobTitle}>
              {job.name}
            </h1>
            <strong className={classes.jobOrganizationTitle}>at {job.organization}</strong>
          </div>
        </Grid>
        <Grid>
          <Button variant="contained" color="primary" className={classes.applyButton}>
            APPLY NOW
          </Button>
        </Grid>
      </div>
      <CardActions className={classes.cardActions}>
        <Button><BookmarkBorderIcon color="disabled"/>SAVE</Button>
        <Button><VisibilityIcon color="disabled"/>HIDE</Button>
        <Button><MailIcon color="disabled"/>EMAIL</Button>
      </CardActions>
    </Paper>
  )
}
export default JobPageHeadCard