import {FETCH_JOB_REQUEST, FETCH_JOB_FAILURE, FETCH_JOB_SUCCESS} from "./jobTypes";
import axios from 'axios';
import {useLogger} from "@material-ui/data-grid";

export const fetchJobs = () => {
  return dispatch => {
    dispatch(fetchJobRequest());

    axios.get("http://localhost:8080/api/test")
      .then(response => {
        dispatch(fetchJobSuccess(response.data))
      })
      .catch(error =>{
        dispatch(fetchJobFailure(error.message));
      })
  }
}
const fetchJobRequest = () => {
  return {
    type: FETCH_JOB_REQUEST
  }
}
const fetchJobSuccess = jobs => {
  return {
    type: FETCH_JOB_SUCCESS,
    payload: jobs
  }
}
const fetchJobFailure = error => {
  return {
    type: FETCH_JOB_FAILURE,
    payload: error
  }
}
