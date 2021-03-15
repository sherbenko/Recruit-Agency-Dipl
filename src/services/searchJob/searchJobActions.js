const {HANDLE_LOCATION} = require("./searchJobTypes");
const {HANDLE_KEYWORD} = require("./searchJobTypes");


export const handleKeyword = value => {
  return {
    type: HANDLE_KEYWORD,
    payload: value
  }
}
export const handleLocation = value => {
  return {
    type: HANDLE_LOCATION,
    payload: value
  }
}
