import * as types from "./../constants/ActionTypes";
var initialState = 0;
var sort = (state = initialState, action) => {
  switch (action.type) {
    case types.SORT:
      return action.sortValue;
    default:
      return state;
  }
};
export default sort;