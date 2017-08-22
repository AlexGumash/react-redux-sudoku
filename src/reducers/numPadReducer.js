import * as actionTypes from "../constants/actionTypes.js";

export const numPad = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_NUMBER:
      state.numPadNumber = action.newNumber;
      state.selectedNumber = action.newSelectedNumber;
      state.position = action.position;
      return { ...state };
    default:
      return state;
  }
};
