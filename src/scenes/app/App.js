import React, {useState} from "react";
import Header from "./header/header";
import {Route, Switch} from "react-router-dom";
import Main from "./main/main";
import SignUp from "../signUp/signUp";
import SignInDialog from "../signInDialog/singInDialog";
import EmployeePage from "../employee/employeePage";
import {withRouter} from 'react-router-dom';
import SideBar from "./sidebar/sideBar";
import JobSearch from "../jobSearch/jobSearch";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '80%',
    margin: '0 auto',
    paddingBottom: '20px',
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      padding: '5px 7px 5px'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '95%',
      padding: '5px 0px 5px'
    },
  }
}));

function App() {
  const [open, setOpen] = useState(false)
  const [isSidebarOpen, setIsSideBarOpen] = useState(false)
  const classes = useStyles();

  const toggleModal = () => {
    setOpen(!open);
  }
  const toggleSidebarOpen = () => {
    setIsSideBarOpen(!isSidebarOpen);
  }

  return (
    <>
      {/*{!(history.location.pathname === '/employee') &&*/}
      <Header toggleModal={toggleModal} toggleSidebarOpen={toggleSidebarOpen}/>
      {/*}*/}
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebarOpen={toggleSidebarOpen}/>
      <SignInDialog isOpen={open} toggleModal={toggleModal}/>
      <Switch>
        <Route exact from="/" render={props => <Main {...props} />}/>
        <div className={classes.wrapper}>

          <Route exact path="/candidate-profile" render={props => <EmployeePage {...props} />}/>
          <Route exact path="/signup" render={props => <SignUp {...props} />}/>
          <Route exact path="/jobs" render={props => <JobSearch {...props} />}/>
        </div>

      </Switch>
    </>
  );
}

export default withRouter(App)
