import * as actionTypes from "../constants/actionTypes.js";

export const history = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_HISTORY:
      state.push(action.newItem);
      console.log(state);
      return [...state];
    default:
      return state;
  }
};
