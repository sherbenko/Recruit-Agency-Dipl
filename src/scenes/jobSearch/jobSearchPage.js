import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import InfoPanel from "./infoPanel/infoPanel";
import SearchForm from "./searchForm/searchForm";
import JobListing from "./jobListing/jobListing";
import Grid from "@material-ui/core/Grid";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

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
  const [jobsItems, setJobsItems] = useState([]);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true)
  const inputsValue = useSelector(state => state.searchJob);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const loadMoreData = () => {
    // console.log(allPage,page)
    //   if(allPage > page){
        getData()
      // }
  }

  const getData = () => {
    console.log(hasNextPage,page)
    if (!hasNextPage)
      return;

    const searchUserUrl = `http://localhost:8080/api/jobs?keyword=${inputsValue.keyword}&location=${inputsValue.location}&currentIndex=${page}`;

    console.log(searchUserUrl)

    axios.get(searchUserUrl).then(({data: {jobs, totalCount}}) => {
      if (jobs) {
        console.log(totalCount ,jobs.length , jobsItems.length)

        if (totalCount === (jobs.length + jobsItems.length)) {
          setHasNextPage( false);
        }
        setJobsItems(items => [...items, ...jobs])
        setPage(page => page + 1)
      }
    })
    console.log(jobsItems)
  }
  const getDataNew = () => {
    console.log(hasNextPage,page,'2')
    setHasNextPage(true)
    setJobsItems([])
    console.log(hasNextPage,page,'2')
    
    const searchUserUrl = `http://localhost:8080/api/jobs?keyword=${inputsValue.keyword}&location=${inputsValue.location}&currentIndex=0`;

    console.log(searchUserUrl)

    axios.get(searchUserUrl).then(({data: {jobs, totalCount}}) => {
      if (jobs) {

        setJobsItems([...jobs])
        setPage(1)
      }
    })
    console.log(jobsItems)

  }
  console.log(page)


  return (
    <>
      <SearchForm getDataNew={getDataNew}/>
      {/*{!isOpenAllJobs &&*/}
      {/*<Button variant="contained" color="primary" className={classes.viewAllJobsButton} onClick={toggleAllJobs}>*/}
      {/*  View all jobs*/}
      {/*</Button>*/}
      {/*}*/}
      {/*{isOpenAllJobs &&*/}
      <>
        <Grid item  className={classes.test}>
          <Button variant="contained" color="primary" className={classes.but}>
            <span>REMOVE ALL FILTERS</span>
          </Button>
        </Grid>
        <InfoPanel/>
        <JobListing loadMoreData={loadMoreData} getData={getData} jobsItems={jobsItems} hasNextPage={hasNextPage}/>
      </>
      {/*}*/}

    </>
  )
}
export default JobSearchPage
