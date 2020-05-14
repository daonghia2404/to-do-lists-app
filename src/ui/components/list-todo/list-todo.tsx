import React from "react";
import { connect } from "react-redux";
import Todo from "ui/components/item-todo/item-todo";
import { List, FlexboxGrid } from "rsuite";
import FlexboxGridItem from "rsuite/lib/FlexboxGrid/FlexboxGridItem";
import "./list-todo.scss";

const TodoItem = (todos: any) => {
  let listTodos;
  if (todos.currentFilter === "SHOW_ALL") {
    listTodos = todos.todos;
  } else if (todos.currentFilter === "SHOW_ACTIVE") {
    listTodos = todos.todos.filter((item: any) => !item.isChecked);
  } else if (todos.currentFilter === "SHOW_COMPLETE") {
    listTodos = todos.todos.filter((item: any) => item.isChecked);
  }

  const formatNumber = (num: number | string) => {
    if (num < 10) return "0" + num;
    return num;
  };

  let taskCreated = formatNumber(todos.todos.length);
  let taskCompleted = formatNumber(
    todos.todos.filter((item: any) => item.isChecked).length
  );

  return (
    <div>
      <FlexboxGrid className="task-info">
        <FlexboxGridItem colspan={12}>
          <span>{taskCreated}</span>
          <h3>Created tasks</h3>
        </FlexboxGridItem>
        <FlexboxGridItem style={{ textAlign: `right` }} colspan={12}>
          <span>{taskCompleted}</span>
          <h3>Completed tasks</h3>
        </FlexboxGridItem>
      </FlexboxGrid>
      <List className="todo-items">
        {listTodos.length === 0 && (
          <p className="if-null">You don't have todos today, Yayy!</p>
        )}
        {listTodos.length > 0 &&
          listTodos.map((item: any) => (
            <Todo
              id={item.id}
              key={item.id}
              title={item.todo}
              isChecked={item.isChecked}
            />
          ))}
      </List>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  todos: state.Todos,
  currentFilter: state.Filter
});

export default connect(mapStateToProps)(TodoItem);
