import React from "react";
import classNames from "classnames";
import "./item-todo.scss";
import { CheckIcon, TrashIcon, CheckedIcon } from "ui/components/icons/icons";

import { connect } from "react-redux";

import { toggleTodo } from "action";
import { deleteTodo } from "action";

type Props = {
  id: number;
  title: string;
  isChecked: boolean;
  dispatch: any;
};

const Todo = ({ id, title, isChecked, dispatch }: Props) => {
  const toggle = () => {
    dispatch(toggleTodo(id));
  };

  const delTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={classNames("item-todo", { active: isChecked })}>
      {isChecked ? (
        <div onClick={toggle}>
          <CheckedIcon className="icon-check" />
        </div>
      ) : (
        <div onClick={toggle}>
          <CheckIcon className="icon-check" />
        </div>
      )}
      <p>{title}</p>
      {isChecked && (
        <div onClick={delTodo}>
          <TrashIcon className="icon-trash" />
        </div>
      )}
    </div>
  );
};

export default connect()(Todo);
