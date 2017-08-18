import * as actionTypes from "../constants/actionTypes.js";

export const numPadReducer = (state = 1, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_NUMBER:
      state = action.newNumber;
      return state;
    default:
      return state;
  }
};
