import React from "react";
import {Grid, makeStyles, Paper} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Sticky from "react-sticky-el";
const useStyles = makeStyles((theme) => ({

  profileHeader: {
    display: 'flex;',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.between('xs', 'lg')]: {
      alignItems: 'center',
      justifyContent: 'center',

    },
  },
  profileImage: {
    width: '140px',
    height: '140px',
    margin: '25px',
    [theme.breakpoints.between('xs', 'lg')]: {
      width: '100px',
      height: '100px',
    },
  },
  stickyProfileCompletion: {
    zIndex: 5,
    padding: 0
  },

  profileDescription: {
    padding: ' 20px 200px 20px 20px',
    [theme.breakpoints.between('xs', 'lg')]: {
      padding: '0px 20px 10px'
    },
  }

}));
const ProfileHeader = () => {
  const classes = useStyles();

  return(
    <Sticky
      // disabled={width === 'xs'}
      stickyClassName={classes.stickyProfileCompletion}
    >
      <Grid container>
        <Grid item xs={12} md={12}>
          <Paper elevation={3} className={classes.profileHeader}>
            <Avatar  alt="Remy Sharp" src="https://source.unsplash.com/random" className={classes.profileImage}/>
            <div  className={classes.profileDescription}>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Sticky>
  )
}
export default ProfileHeader