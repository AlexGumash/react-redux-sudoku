import * as actionTypes from "../constants/actionTypes.js";

export const statusReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.COMPLETE_STATUS:
      state = true;
      return state;
    case actionTypes.IN_PROGRESS_STATUS:
      state = false;
      return state;
    default:
      return state;
  }
};
