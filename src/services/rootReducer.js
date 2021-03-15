import {combineReducers} from "redux";
import jobReducer from './job/jobReducer';
import searchJobReducer from "./searchJob/searchJobReducer";

const rootReducer = combineReducers({
  job:jobReducer,
  searchJob:searchJobReducer
});
export default rootReducer
