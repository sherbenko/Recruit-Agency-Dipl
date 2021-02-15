import React from "react";
import AppliedJobsTable from "./appliedJobsTable/appliedJobsTable";
import {makeStyles, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AppliedJobsInfoCard from "./appliedJobsInfoCard/appliedJobsInfoCard";
const useStyles = makeStyles((theme) => ({


}));
const AppliedJobsPage = () => {
  const classes = useStyles();
  return (
    <>
     <AppliedJobsInfoCard/>
      <AppliedJobsTable/>
    </>
  )
}
export default AppliedJobsPage