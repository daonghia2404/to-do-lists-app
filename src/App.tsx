import React, { useState } from "react";
import "./index.css";
import "./App.scss";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootReducer } from "reducer";
import { IconButton } from "rsuite";
import { Modal } from "rsuite";

import { Day } from "ui/components/day/day";
import ListTodo from "ui/components/list-todo/list-todo";
import AddTodo from "ui/components/add-todo/add-todo";
import { FilterButton } from "ui/components/filter-button/filter-button";

import { AddIcon } from "ui/components/icons/icons";
import "rsuite/dist/styles/rsuite-default.css";

import { save, load } from "redux-localstorage-simple";

const store = createStore(
  RootReducer,
  load(),
  composeWithDevTools(applyMiddleware(save()))
);

const App = () => {
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(false);
  };
  const open = () => {
    setShow(true);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <IconButton
          onClick={open}
          color="green"
          className="plus-icon"
          icon={<AddIcon />}
          circle
        />
        <main>
          <Day />
          <Modal size="xs" className="form-popup" show={show} onHide={close}>
            <AddTodo />
          </Modal>
          <ListTodo />
        </main>
        <FilterButton />
      </div>
    </Provider>
  );
};

export default App;
