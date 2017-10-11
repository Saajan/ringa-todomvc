import React from "react";

import { Model, Controller } from "ringa";
import { attach } from "react-ringa";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export const TodoAppModel = Model.construct("TodoAppModel", [
  {
    name: "todos",
    default: []
  }
]);

class TodoAppController extends Controller {
  constructor() {
    super();

    this.addModel(new TodoAppModel());

    this.addListener("addTodo", [this.loadTodos]);
  }

  loadTodos(todo, todoAppModel) {
    todoAppModel.todos.push(todo);
    todoAppModel.notify('todos');
  }
}

export default class App extends React.Component {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor(props) {
    super(props);

    attach(this, new TodoAppController());
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    return (
      <div>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}
