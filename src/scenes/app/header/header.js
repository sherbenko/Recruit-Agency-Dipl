import React from 'react'
import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import styles from './header.styles';
import { withStyles } from '@material-ui/core/styles';

const Header = ({classes, history, toggleModal, toggleSidebarOpen}) => {





  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  return (
    <AppBar position={"static"}>
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" >
            <MenuIcon onClick={toggleSidebarOpen}/>
          </IconButton>
            <Typography variant={"h6"} className={classes.title}>Recruit Agency</Typography>
            <Box mr={3} className={classes.menuButton}>
                <Button color={"inherit"} variant={"outlined"} onClick={toggleModal} className={classes.buttonStyle}>Log in</Button>
            </Box>
            <Button color={"secondary"} variant={"contained"} onClick={()=>handleButtonClick("/signup")} className={classes.buttonStyle}>Sing up</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}


export default withRouter(connect()(withStyles(styles)(Header)))