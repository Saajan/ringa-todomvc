import React from "react";

import { TodoAppModel } from "./App";
import { depend, dependency } from "react-ringa";

export default class TodoItem extends React.Component {
  render() {
    let { id, text, completed } = this.props;
    return (
      <li>
        <input type="checkbox" value={completed} />
        {text}
      </li>
    );
  }
}
