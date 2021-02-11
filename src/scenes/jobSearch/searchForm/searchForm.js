import React from 'react'
import {Grid, makeStyles, Paper, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
const SearchForm = () => {

  const classes = useStyles();
  return (
    <form>
      <Paper className={classes.searchContainer}>
        <Grid item xs={12} sm={4} md={4} className={classes.searchInput}>
          <TextField fullWidth required label="Key Words"/>
        </Grid>
        <Grid item xs={12} sm={4} md={4} className={classes.searchInput}>
          <TextField fullWidth required label="Location"/>
        </Grid>
        <Button variant="contained" color="primary" className={classes.searchButton}>
          Search
        </Button>

      </Paper>
    </form>
  )
}
export default SearchForm