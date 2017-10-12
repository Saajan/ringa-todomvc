import React from 'react';

import {dispatch} from 'ringa';
import {depend, dependency} from 'react-ringa';
import {TodoAppModel} from './App';

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
    return <div ref="root">
        <label>To do</label>
        <input ref="todo" defaultValue={"Hello World"} />
        <button onClick={this.addTodo_onClickHandler}>Add To Do</button>
        <button onClick={this.clear_onClickHandler}>Clear</button>
      </div>;
  }

  //-----------------------------------
  // Events
  //-----------------------------------
  addTodo_onClickHandler() {
    dispatch('addTodo', {
      todo: this.refs.todo.value
    }, this.refs.root);
  }

  clear_onClickHandler() {
    this.state.todoAppModel.todos = [];
  }
}
