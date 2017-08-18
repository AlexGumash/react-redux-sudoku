import * as actionTypes from "../constants/actionTypes.js";
import { tableApi } from "../api/table.js";

const initialState = tableApi.table();

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NUMBER:
      state[action.position[0]][action.position[1]] = parseInt(
        action.number,
        10
      );
      return [...state];
    case actionTypes.DEL_NUMBER:
      state[action.position[0]][action.position[1]] = "";
      return [...state];
    default:
      return state;
  }
};
