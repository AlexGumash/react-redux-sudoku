import { combineReducers, createStore } from "redux";

import { numPadReducer } from "./numPadReducer";
import { tableReducer } from "./tableReducer";

const rootReducer = combineReducers({
  numPadReducer,
  tableReducer
});

const store = createStore(rootReducer);

export default store;
