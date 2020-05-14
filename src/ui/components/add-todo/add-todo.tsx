import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTodo } from "action";
import { Input } from "rsuite";
import { FlexboxGrid, Col } from "rsuite";
import { Button } from "rsuite";
import "./add-todo.scss";

export const InputFilter = ({ dispatch }: any) => {
  let [value, setValue] = useState("");
  let [focus, setFocus] = useState(true);

  const onChange = (value: string) => {
    setValue(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    } else {
      value = value.replace(/^./, value[0].toUpperCase());
    }
    dispatch(addTodo(value));
    setValue("");
  };

  useEffect(() => {
    setFocus(true);
  }, []);

  return (
    <form action="#" onSubmit={onSubmit} style={{ padding: `20px 0` }}>
      <FlexboxGrid justify="space-between">
        <FlexboxGrid.Item
          colspan={24}
          className="add-todo__item"
          componentClass={Col}
          sm={17}
        >
          <Input
            autoFocus={focus}
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Add Todos here.."
          />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          colspan={24}
          className="add-todo__item"
          componentClass={Col}
          sm={6}
        >
          <Button style={{ width: "100%" }} color="green" type="submit">
            Add to do
          </Button>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </form>
  );
};

export default connect()(InputFilter);
