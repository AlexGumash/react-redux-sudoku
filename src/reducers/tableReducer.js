import * as actionTypes from "../constants/actionTypes.js";
import { tableApi } from "../api/table.js";

const initialState = tableApi.table();

export const table = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NUMBER:
      const newState = state.slice();

      console.log(newState);

      newState[action.position[0]][action.position[1]] = parseInt(
        action.number,
        10
      );
      console.log(newState);
      return newState;
    case actionTypes.DEL_NUMBER:
      state[action.position[0]][action.position[1]] = "";
      return [...state];
    default:
      return state;
  }
};
