import { visibilityFilter } from "action";

export const Filter = (state = visibilityFilter.SHOW_ALL, action: any) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return (state = action.filter);
    default:
      return state;
  }
};
