import * as actionTypes from "../constants/actionTypes.js";

export const numPad = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_NUMBER:
      // state.numPadNumber = action.newNumber;
      // state.selectedNumber = action.newSelectedNumber;
      // state.position = action.position;
      return {
        ...state,
        numPadNumber: action.newNumber,
        selectedNumber: action.newSelectedNumber,
        position: action.position
      };
    default:
      return state;
  }
};
