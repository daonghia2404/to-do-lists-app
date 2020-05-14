import { combineReducers } from "redux";

import { Todos } from "./todos";
import { Filter } from "./filter";

export const RootReducer = combineReducers({
  Filter,
  Todos
});
