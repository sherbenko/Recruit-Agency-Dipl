import {HANDLE_KEYWORD, HANDLE_LOCATION} from "./searchJobTypes";

const initialState = {
  keyword:'',
  location:''
}
export default function  searchJobReducer (state = initialState,action) {
  switch (action.type) {
    case HANDLE_KEYWORD :
      return {
        ...state,
        keyword: action.payload
      }
    case HANDLE_LOCATION :
      return {
        ...state,
        location: action.payload
      }
    default:
      return state;

  }
}

