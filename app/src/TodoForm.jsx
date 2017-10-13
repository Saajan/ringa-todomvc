import React from "react";

import { dispatch } from "ringa";
import { depend, dependency } from "react-ringa";
import { TodoAppModel } from "./App";
import { Topcontainer, Button, Label ,Buttoncontainer } from "./style";

export default class TodoForm extends React.Component {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor(props) {
    super(props);

    this.addTodo_onClickHandler = this.addTodo_onClickHandler.bind(this);
    this.clear_onClickHandler = this.clear_onClickHandler.bind(this);

    depend(this, dependency(TodoAppModel));
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    return (
      <div ref="root">
        <Topcontainer>
          <Label>To do</Label>
          <input ref="todo" type="text" defaultValue={"Hello World"} />
          <Buttoncontainer>
            <Button onClick={this.addTodo_onClickHandler}>Add To Do</Button>
            <Button onClick={this.clear_onClickHandler}>Clear</Button>
          </Buttoncontainer>
        </Topcontainer>
      </div>
    );
  }

  //-----------------------------------
  // Events
  //-----------------------------------
  addTodo_onClickHandler() {
    dispatch(
      "addTodo",
      {
        todo: this.refs.todo.value
      },
      this.refs.root
    );
  }

  clear_onClickHandler() {
    this.state.todoAppModel.todos = [];
  }
}
