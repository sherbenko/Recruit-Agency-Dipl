import React, {useState} from "react";
import Header from "./header/header";
import {Route, Switch} from "react-router-dom";
import Main from "./main/main";
import SignUp from "../signUp/signUp";
import SignInDialog from "../signInDialog/singInDialog";
import EmployeePage from "../employee/employeePage";
import {withRouter} from 'react-router-dom';
import SideBar from "./sidebar/sideBar";

function App() {
  const [open, setOpen] = useState(false)
  const [isSidebarOpen,setIsSideBarOpen] = useState(false)

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
      {/*<div className={}>*/}
      <Switch>
        <Route exact from="/" render={props => <Main {...props} />}/>
        <Route exact path="/candidate-profile" render={props => <EmployeePage {...props} />}/>
        <Route exact path="/signup" render={props => <SignUp {...props} />}/>
      </Switch>
      {/*</div>*/}
    </>
  );
}

export default withRouter(App)
