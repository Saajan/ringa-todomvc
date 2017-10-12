import React from 'react';

import {TodoAppModel} from './App';
import {depend, dependency} from 'react-ringa';

export default class TodoList extends React.Component {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor(props) {
    super(props);

    depend(this, dependency(TodoAppModel, ['todos']));
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    const {todos} = this.state;

    return <div>{todos ? todos.map(todo => <div>{todo}</div>) : undefined}</div>;
  }
}
