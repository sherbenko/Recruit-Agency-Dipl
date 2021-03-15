import React from 'react'
import {Grid, makeStyles, Paper, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {handleKeyword, handleLocation} from "../../../services/searchJob/searchJobActions";
const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '130px',
    marginTop: '5px'

  },
  searchInput: {
    [theme.breakpoints.down('sm')]: {
      padding: '10px 10px 0px'
    },
  },
  searchButton: {
    margin: '10px 0px'
  },
  viewAllJobsButton: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px'
  }

}))
const SearchForm = ({getDataNew}) => {

  const classes = useStyles();
  const inputsValue = useSelector(state => state.searchJob);
  const dispatch = useDispatch()
  console.log(inputsValue)

  const handleTextFieldKeyWord = (e) => {
    dispatch(handleKeyword(e.target.value))
  }
  const handleTextFieldLocation = (e) => {
    dispatch(handleLocation(e.target.value))
  }
  return (
    <form>
      <Paper className={classes.searchContainer}>
        <Grid item xs={12} sm={4} md={4} className={classes.searchInput}>
          <TextField value={inputsValue.keyword} fullWidth required label="Key Words" onChange={handleTextFieldKeyWord}/>
        </Grid>
        <Grid item xs={12} sm={4} md={4} className={classes.searchInput}>
          <TextField value={inputsValue.location} fullWidth required label="Location" onChange={handleTextFieldLocation}/>
        </Grid>
        <Button variant="contained" color="primary" className={classes.searchButton} onClick={getDataNew}>
          Search
        </Button>

      </Paper>
    </form>
  )
}
export default SearchForm
