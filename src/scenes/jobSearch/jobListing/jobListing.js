import React, {useEffect, useRef, useState} from 'react';
import {Button, Grid, makeStyles} from "@material-ui/core";
import JobListingCard from "./jobListingCard/jobListingCard";
import JobListingFilterSection from "./jobListingFilter/jobListingFilterSection";
import {useDispatch, useSelector} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import {Content} from "./Content";
import {Waypoint} from "react-waypoint";

const useStyles = makeStyles((theme) => ({
  jobListingContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  /*fix*/
  menuContainer: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },

  },
  filterMenuTitle: {
    fontSize: '15px',
    fontFamily: 'franklin-gothic-urw-cond, Helvetica ,Arial sans-serif',
    margin: '14px 0',
    paddingLeft: '16px'
  },
  removeFilterButton: {
    margin: '0 16px 14px 16px'
  },
  removeFilterButtonTitle: {},
  filterHeader: {
    borderBottom: '1px solid #eee'
  },
  jobCardsContainer: {
    paddingLeft: '16px'
  },

}))
// const jobs = [
//   {
//     id: 1,
//     name: 'Job Name',
//     organization: 'Organization',
//     passedHours: 12,
//     location: 'Location',
//     description: 'ADP is hiring an Account Manager II. The Account Manager II is responsible for developing partnerships\n' +
//       'with assigned clients to ensure long-term, successful relationships for ADP by supporting and managing\n' +
//       'client expectations. The Account Manager ...'
//   },
//   {
//     id: 2,
//     name: '2nd shift Lead',
//     organization: 'Pitney Bowes Inc.',
//     passedHours: 12,
//     location: 'Arlington, TX',
//     description: 'A detail-oriented Leader who will thrive in a fast-paced team centered production environment with responsibility in all aspects of meeting the company’s pre-sort mailing productivity standards in the mailing industry . You are a self-motivated an...'
//   },
//   {
//     id: 3,
//     name: 'Account Manager II',
//     organization: 'ADP',
//     passedHours: 24,
//     location: 'Florence, SC',
//     description: 'ADP is hiring an Account Manager II. The Account Manager II is responsible for developing partnerships with assigned clients to ensure long-term, successful relationships for ADP by supporting and managing client expectations. The Account Manager ...'
//   },
//   {
//     id: 4,
//     name: 'Package Handler III',
//     organization: 'Pitney Bowes Inc.',
//     passedHours: 1,
//     location: 'Bloomington, CA',
//     description: 'Pitney Bowes is now hiring for Full Time Direct Hire Package Handler III positions in our Bloomingto, CA Facility. Multiple Shifts Available $.50/hr additional for 2nd shift (Days/Hours) $1.00/hr additional for 3rd shift (Days/Hours) You A...'
//   },
//   {
//     id: 5,
//     name: 'Account Manager II',
//     organization: 'ADP',
//     passedHours: 9,
//     location: 'Florence, SC',
//     description: 'ADP is hiring an Account Manager II. The Account Manager II is responsible for developing partnerships with assigned clients to ensure long-term, successful relationships for ADP by supporting and managing client expectations. The Account Manager ...'
//   },
//   {
//     id: 6,
//     name: 'Package Handler III',
//     organization: 'Pitney Bowes Inc.',
//     passedHours: 1,
//     location: 'Bloomington, CA',
//     description: 'Pitney Bowes is now hiring for Full Time Direct Hire Package Handler III positions in our Bloomingto, CA Facility. Multiple Shifts Available $.50/hr additional for 2nd shift (Days/Hours) $1.00/hr additional for 3rd shift (Days/Hours) You A...'
//   },
//
// ]
const organizations = [
  {id: 1, name: 'Accenture', numOfJobs: 2312},
  {id: 2, name: 'Accenture', numOfJobs: 2312},
  {id: 3, name: 'The Home Depot', numOfJobs: 2312},
  {id: 4, name: 'Accenture', numOfJobs: 2312},
  {id: 5, name: 'The Home Depot', numOfJobs: 2312},
  {id: 6, name: 'Accenture', numOfJobs: 2312},
  {id: 7, name: 'Accenture1', numOfJobs: 2312},
  {id: 8, name: 'Accenture2', numOfJobs: 2312},
  {id: 9, name: 'Accenture3', numOfJobs: 2312},

]
const JobListing = ({loadMoreData, getData, jobsItems, hasNextPage}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div className={classes.jobListingContainer}>
        <Grid item xs={12} sm={3} md={3} className={classes.menuContainer}>
          <div className={classes.filterHeader}>
            <h4 className={classes.filterMenuTitle}> Refine your search </h4>

            <Button variant="contained" color="primary" className={classes.removeFilterButton}>
              <span className={classes.removeFilterButtonTitle}>REMOVE ALL FILTERS</span>
            </Button>
          </div>
          <JobListingFilterSection items={organizations} sectionName={'Organization'}/>
          <JobListingFilterSection items={organizations} sectionName={'Country'}/>
          <JobListingFilterSection items={organizations} sectionName={'City'}/>
        </Grid>
        <Grid item xs={12} sm={8} md={8} className={classes.jobCardsContainer}>

          {jobsItems.map((job) => (
            <JobListingCard job={job}/>
          ))}
        </Grid>

      </div>
      {hasNextPage && <Waypoint onEnter={loadMoreData}>
        <h5 style={{
          color: 'red',
          fontSize: '250%',
          display: "flex",
          justifyContent: 'center',
          alignContent: 'center'
        }}>Loading</h5>
      </Waypoint>
      }
    </>

  )
}
export default JobListing
