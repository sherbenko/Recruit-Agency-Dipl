import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SearchForm from "./searchForm";
import InfoPanel from "./infoPanel/infoPanel";
import JobListing from "./jobListing/jobListing";

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
  }
}))

const JobSearch = () => {
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
        <InfoPanel/>
        <JobListing/>
      </>
      }

    </>
  )
}
export default JobSearch