import React from "react";

import { TodoAppModel } from "./App";
import { depend, dependency } from "react-ringa";

import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor(props) {
    super(props);

    //this.deleteTodo_onClickHandler = this.deleteTodo_onClickHandler.bind(this);

    depend(this, dependency(TodoAppModel, ["todos"]));
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    const { todos } = this.state;
    return (
      <ul>
        {todos
          ? todos.map(todo => {
              return <TodoItem key={todo.id} {...todo} />;
            })
          : undefined}
      </ul>
    );
  }
}
