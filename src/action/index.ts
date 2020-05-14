let storeLocal = JSON.parse(
  localStorage.getItem("redux_localstorage_simple") || "[]"
);
let nextID: number;

typeof storeLocal.Todos === "undefined" || storeLocal.Todos.length === 0
  ? (nextID = 0)
  : (nextID = storeLocal.Todos.slice(-1).pop().id + 1);

export const addTodo = (text: string) => ({
  type: "ADD_TODO",
  text,
  id: nextID++
});

export const toggleTodo = (id: number) => ({
  type: "TOGGLE_TODO",
  id
});

export const deleteTodo = (id: number) => ({
  type: "DELETE_TODO",
  id
});

export const setVisibilityFilter = (filter: string) => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const visibilityFilter = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLETE: "SHOW_COMPLETE"
};
