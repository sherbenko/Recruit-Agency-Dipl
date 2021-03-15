import React from 'react'
import Typography from "@material-ui/core/Typography";
import {Button, CardActions, Link, makeStyles} from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  jobNameTitle: {
    color: '#30acff',
    fontSize: '24px',
    fontWeight: '500',
  },
  organizationNameTitle: {
    color: '#30acff',
    fontSize: '19px',
    fontWeight: '500',
  },
  jobDescription: {
    fontFamily: 'franklin-gothic-urw-cond, Helvetica, Arial, sans-serif',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  jobItem: {
    borderBottom: '1px solid #eee',
    padding: '12px 0 12px 0'
  },
  cardActions: {
    paddingTop: '10px'
  },
  orgNameAndHours: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  hour: {
    fontStyle: ' italic'
  }
}))
const JobListingCard = ({job}) => {
  const classes = useStyles();

  return (
    <div className={classes.jobItem} key={job.id}>
      <Typography variant="h4" component="h2">
        <Link href="#" className={classes.jobNameTitle}>
          {job.jobName}
        </Link>
      </Typography>
      <div className={classes.orgNameAndHours}>
        <Typography variant="h6" component="h2">
          <Link href="#" className={classes.organizationNameTitle}>
            {job.organization}
          </Link>
        </Typography>
        <Typography color="textSecondary" className={classes.hour}>
          {job.passedHours}h
        </Typography>
      </div>
      <Typography color="textSecondary">
        {job.country}
      </Typography>
      <Typography color="textSecondary">
        {job.city}
      </Typography>
      <Typography variant="body2" component="p" className={classes.jobDescription}>
        {job.description}
      </Typography>
      <CardActions className={classes.cardActions}>
        <Button><BookmarkBorderIcon color="disabled"/>SAVE</Button>
        <Button><VisibilityIcon color="disabled"/>HIDE</Button>
        <Button><MailIcon color="disabled"/>EMAIL</Button>
      </CardActions>
    </div>
  )
}
export default JobListingCard
