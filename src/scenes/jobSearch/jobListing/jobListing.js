import React from 'react';
import {Button, CardActions, Grid, Link, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

const useStyles = makeStyles((theme) => ({
  jobListingContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },

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
    [theme.breakpoints.down('sm')]: {
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
  },
  /*fix*/
  menuContainer: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
  }
}))
const jobs = [
  {
    id: 1,
    name: 'Job Name',
    organization: 'Organization',
    passedHours: 12,
    location: 'Location',
    description: 'ADP is hiring an Account Manager II. The Account Manager II is responsible for developing partnerships\n' +
      'with assigned clients to ensure long-term, successful relationships for ADP by supporting and managing\n' +
      'client expectations. The Account Manager ...'
  },
  {
    id: 2,
    name: '2nd shift Lead',
    organization: 'Pitney Bowes Inc.',
    passedHours: 12,
    location: 'Arlington, TX',
    description: 'A detail-oriented Leader who will thrive in a fast-paced team centered production environment with responsibility in all aspects of meeting the company’s pre-sort mailing productivity standards in the mailing industry . You are a self-motivated an...'
  },
  {
    id: 3,
    name: 'Account Manager II',
    organization: 'ADP',
    passedHours: 24,
    location: 'Florence, SC',
    description: 'ADP is hiring an Account Manager II. The Account Manager II is responsible for developing partnerships with assigned clients to ensure long-term, successful relationships for ADP by supporting and managing client expectations. The Account Manager ...'
  },
  {
    id: 4,
    name: 'Package Handler III',
    organization: 'Pitney Bowes Inc.',
    passedHours: 1,
    location: 'Bloomington, CA',
    description: 'Pitney Bowes is now hiring for Full Time Direct Hire Package Handler III positions in our Bloomingto, CA Facility. Multiple Shifts Available $.50/hr additional for 2nd shift (Days/Hours) $1.00/hr additional for 3rd shift (Days/Hours) You A...'
  },
  {
    id: 5,
    name: 'Account Manager II',
    organization: 'ADP',
    passedHours: 9,
    location: 'Florence, SC',
    description: 'ADP is hiring an Account Manager II. The Account Manager II is responsible for developing partnerships with assigned clients to ensure long-term, successful relationships for ADP by supporting and managing client expectations. The Account Manager ...'
  }, ,
  {
    id: 6,
    name: 'Package Handler III',
    organization: 'Pitney Bowes Inc.',
    passedHours: 1,
    location: 'Bloomington, CA',
    description: 'Pitney Bowes is now hiring for Full Time Direct Hire Package Handler III positions in our Bloomingto, CA Facility. Multiple Shifts Available $.50/hr additional for 2nd shift (Days/Hours) $1.00/hr additional for 3rd shift (Days/Hours) You A...'
  },

]
const JobListing = () => {
  const classes = useStyles();
  return (
    <div className={classes.jobListingContainer}>
      <Grid item xs={12} sm={3} md={3} className={classes.menuContainer}>
        Menu
      </Grid>
      <Grid item xs={12} sm={9} md={9}>
        {
          jobs.map((job) => (
            <div className={classes.jobItem} key={job.id}>
              <Typography variant="h4" component="h2">
                <Link href="#" className={classes.jobNameTitle}>
                  {job.name}
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
                {job.location}
              </Typography>
              <Typography variant="body2" component="p" className={classes.jobDescription}>
                {job.description}
              </Typography>
              <CardActions className={classes.cardActions}>
                <Button><BookmarkBorderIcon/>SAVE</Button>
                <Button><VisibilityOutlinedIcon/>HIDE</Button>
                <Button><MailOutlineOutlinedIcon/>EMAIL</Button>
              </CardActions>
            </div>

          ))
        }


      </Grid>
    </div>
  )
}
export default JobListing