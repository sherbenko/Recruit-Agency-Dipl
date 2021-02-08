import React from "react";
import Button from "@material-ui/core/Button";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import {makeStyles, Paper} from "@material-ui/core";
import FilterListIcon from '@material-ui/icons/FilterList';

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
    fontSize: '1em',
    paddingLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
  },
  infoPanelActions: {
    paddingRight: '20px'
  },
  actionTitle: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
  }
}))
const InfoPanel = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.infoPanel}>
      <div className={classes.totalJobsInfo}>
        <h3>Found 4873 jobs</h3>
      </div>
      <div className={classes.infoPanelActions}>
        <Button><NotificationsIcon/><span className={classes.actionTitle}>NOTIFICATION</span></Button>
        <Button><SwapVertIcon/><span className={classes.actionTitle}>SORT</span></Button>
        <Button className={classes.menuButton}><FilterListIcon/></Button>
      </div>
    </Paper>
  )
}
export default InfoPanel