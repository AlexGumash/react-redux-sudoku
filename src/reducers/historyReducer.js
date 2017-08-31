import * as actionTypes from "../constants/actionTypes.js";
import { tableApi } from "../api/table.js";

const initialState = {
  past: [],
  present: tableApi.table(),
  future: []
};

export const history = (state = initialState, action) => {
  const { past, present, future } = state;

  switch (action.type) {
    case actionTypes.ADD_TO_HISTORY:
      return {
        past: [...past, present],
        present: action.item,
        future: future
      };

    case actionTypes.UNDO:
      const prev = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);
      return {
        past: newPast,
        present: prev,
        future: [present, ...future]
      };

    case actionTypes.REDO:
      const next = future[0];
      const newFuture = future.slice(1);
      return {
        past: [...past, present],
        present: next,
        future: newFuture
      };

    default:
      return state;
  }
};
