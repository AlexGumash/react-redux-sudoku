import { combineReducers, createStore } from "redux";

import { numPad } from "./numPadReducer";
import { table } from "./tableReducer";
import { status } from "./statusReducer";
import { history } from "./historyReducer";

const rootReducer = combineReducers({
  numPad,
  table,
  status,
  history
});

const store = createStore(rootReducer);

export default store;
