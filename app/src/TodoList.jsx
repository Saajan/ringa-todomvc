import React from "react";

import { TodoAppModel } from "./App";
import { depend, dependency } from "react-ringa";

export default class TodoList extends React.Component {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor(props) {
    super(props);

    this.deleteTodo_onClickHandler = this.deleteTodo_onClickHandler.bind(this);

    depend(this, dependency(TodoAppModel, ["todos"]));
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    const { todos } = this.state;

    return (
      <div>
        {todos ? todos.map((todo,index) => (<div onClick={this.deleteTodo_onClickHandler(index)}>{todo}</div>)) : undefined}
      </div>
    );
  }

  deleteTodo_onClickHandler(index) {
    console.log(this.state.todoAppModel.todos,index);

    //this.state.todoAppModel.todos

    //this.state.todoAppModel.todos = [];
  }
}
