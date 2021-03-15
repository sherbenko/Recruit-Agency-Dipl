import {FETCH_JOB_FAILURE, FETCH_JOB_SUCCESS, FETCH_JOB_REQUEST} from "./jobTypes";

const initialState = {
  jobs: [],
  error: ''
}

export default function jobReducer (state = initialState, action)  {
  switch (action.type) {
    case FETCH_JOB_REQUEST:
      return {
        ...state
      }
    case FETCH_JOB_SUCCESS:
      return {
        jobs: action.payload,
        error: ''
      };
    case FETCH_JOB_FAILURE:
      return {
         jobs:[],
         error:  action.payload
      };
    default:
      return state;
  }
}

