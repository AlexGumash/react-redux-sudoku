import * as actionTypes from "../constants/actionTypes.js";

export const statusReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STATUS:
      state = !state;
      return state;
    default:
      return state;
  }
};
