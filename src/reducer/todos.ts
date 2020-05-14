type Action = {
  type: string;
  id: any;
  text?: string;
  isChecked: boolean;
};

type State = Array<{
  id: number;
  todo: string | undefined;
  isChecked: boolean;
}>;

export const Todos = (state: State = [], action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return (state = [
        ...state,
        {
          id: action.id,
          todo: action.text,
          isChecked: false
        }
      ]);
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, isChecked: !todo.isChecked } : todo
      );

    case "DELETE_TODO":
      return (state = state.filter(item => item.id !== action.id));

    default:
      return state;
  }
};
