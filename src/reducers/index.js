import { combineReducers, createStore } from "redux";

import { numPad } from "./numPadReducer";
import { table } from "./tableReducer";
import { status } from "./statusReducer";

const rootReducer = combineReducers({
  numPad,
  table,
  status
});

const store = createStore(rootReducer);

export default store;
