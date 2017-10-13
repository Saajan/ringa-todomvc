import React from "react";

import { Model, Controller } from "ringa";
import { attach } from "react-ringa";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import uuidv from "uuid/v1";
import { Wrapper,Top,Bottom } from "./style";

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
    todoAppModel.todos.push({
      id: uuidv(),
      text: todo,
      completed: false
    });
    todoAppModel.notify("todos");
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
        <Wrapper>
          <Top>
            <TodoForm />
          </Top>
          <Bottom>
            <TodoList />
          </Bottom>
        </Wrapper>
      </div>
    );
  }
}
