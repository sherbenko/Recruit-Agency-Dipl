import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import InfoPanel from "./infoPanel/infoPanel";
import SearchForm from "./searchForm/searchForm";
import JobListing from "./jobListing/jobListing";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  infoPanel: {
    height: '60px',
    width: '100%',
    marginTop: '10px',
    backgroundColor: '#eee',
    fontFamily: 'franklin-gothic-urw-cond, Helvetica, Arial, sans-serif',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  totalJobsInfo: {
    paddingLeft: '20px'
  },
  viewAllJobsButton: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px'
  },
  infoPanelActions: {
    paddingRight: '20px'
  },
  test: {

    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    // justifyContent: 'center',
  },
  but:{
    flex:'1'
  }

}))

const JobSearchPage = () => {
  const classes = useStyles();
  const [isOpenAllJobs, setIsOpenAllJobs] = useState(false);
  const toggleAllJobs = () => {
    setIsOpenAllJobs(!isOpenAllJobs)
  }
  return (
    <>
      <SearchForm/>
      {!isOpenAllJobs &&
      <Button variant="contained" color="primary" className={classes.viewAllJobsButton} onClick={toggleAllJobs}>
        View all jobs
      </Button>
      }
      {isOpenAllJobs &&
      <>
        <Grid item  className={classes.test}>
          <Button variant="contained" color="primary" className={classes.but}>
            <span>REMOVE ALL FILTERS</span>
          </Button>
        </Grid>
        <InfoPanel/>
        <JobListing/>
      </>
      }

    </>
  )
}
export default JobSearchPage