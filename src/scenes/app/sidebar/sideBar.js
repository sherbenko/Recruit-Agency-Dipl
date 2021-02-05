import React from "react";
import {Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))
const SideBar = ({isSidebarOpen, toggleSidebarOpen}) => {
  const classes = useStyles();

  return(
    <Drawer
      style={{ width: '320px' }}
      anchor="left"
      open={isSidebarOpen}
      onClose={toggleSidebarOpen}
      classes={{ paper: classes.drawerPaper }}
    >
      <List>
        <Link to="/" className={classes.link} onClick={toggleSidebarOpen}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        <Link to="/candidate-profile" className={classes.link} onClick={toggleSidebarOpen}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"My Profile"} />
          </ListItem>
        </Link>
        <Link to="/" className={classes.link} onClick={toggleSidebarOpen}>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={"About"} />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  )
}
export default SideBar