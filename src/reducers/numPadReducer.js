import * as actionTypes from "../constants/actionTypes.js";

export const numPad = (state = "", action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_NUMBER:
      state = action.newNumber;
      return state;
    default:
      return state;
  }
};
