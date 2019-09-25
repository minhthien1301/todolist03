import * as types from "./../constants/ActionTypes";
var initialState = "";
var search = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_REQUEST:
      return state;
    case types.SEARCH_SUCCESS:
      return action.keyword;
    case types.SEARCH_ERRORS:
      return state;
    default:
      return state;
  }
};
export default search;
