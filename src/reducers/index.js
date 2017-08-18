import { combineReducers, createStore } from "redux";

import { numPadReducer } from "./numPadReducer";
import { tableReducer } from "./tableReducer";
import { statusReducer } from "./statusReducer";

const rootReducer = combineReducers({
  numPadReducer,
  tableReducer,
  statusReducer
});

const store = createStore(rootReducer);

export default store;
